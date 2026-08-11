import { Test } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

/**
 * Covers LogStateChange business rule (after update on incident).
 * Positive: update state → info message with previous and current values.
 * Negative: insert only → rule does not run (action is update-only).
 */
Test(
    {
        $id: Now.ID['atf_br_state_change_update'],
        name: 'Business Rule: LogStateChange on update',
        description:
            'Inserts an incident with state=1 (New), opens it, changes state to 2 (In Progress), submits, and asserts LogStateChange shows "state updated from "1" to "2"" after the update.',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        const incident = atf.server.recordInsert({
            $id: Now.ID['atf_br_insert_incident'],
            table: 'incident',
            fieldValues: {
                short_description: 'ATF LogStateChange update test',
                state: '1',
            },
            enforceSecurity: false,
            assert: 'record_successfully_inserted',
        })

        atf.form.openExistingRecord({
            $id: Now.ID['atf_br_open_incident'],
            table: 'incident',
            recordId: incident.record_id,
            formUI: 'standard_ui',
        })

        atf.form.setFieldValue({
            $id: Now.ID['atf_br_set_state'],
            table: 'incident',
            fieldValues: {
                state: '2',
            },
            formUI: 'standard_ui',
        })

        atf.form.submitForm({
            $id: Now.ID['atf_br_submit_update'],
            assert: 'form_submitted_to_server',
            formUI: 'standard_ui',
        })

        atf.uiTestScript.runTest({
            $id: Now.ID['atf_br_assert_state_message'],
            script: Now.include('./business_rule_state_change_update.script.js'),
        })

        atf.server.recordValidation({
            $id: Now.ID['atf_br_validate_state'],
            table: 'incident',
            recordId: incident.record_id,
            fieldValues: 'state=2',
            assert: 'record_validated',
            enforceSecurity: false,
        })
    }
)

Test(
    {
        $id: Now.ID['atf_br_state_change_insert_negative'],
        name: 'Business Rule: LogStateChange does not run on insert',
        description:
            'Submits a new incident form (insert path) and asserts LogStateChange does not show a "state updated from" message, because the business rule action is update-only.',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        atf.form.openNewForm({
            $id: Now.ID['atf_br_neg_open_new'],
            table: 'incident',
            formUI: 'standard_ui',
        })

        atf.form.setFieldValue({
            $id: Now.ID['atf_br_neg_set_fields'],
            table: 'incident',
            fieldValues: {
                short_description: 'ATF LogStateChange insert negative test',
                state: '1',
            },
            formUI: 'standard_ui',
        })

        atf.form.submitForm({
            $id: Now.ID['atf_br_neg_submit'],
            assert: 'form_submitted_to_server',
            formUI: 'standard_ui',
        })

        atf.uiTestScript.runTest({
            $id: Now.ID['atf_br_neg_assert_no_message'],
            script: Now.include('./business_rule_state_change_insert_negative.script.js'),
        })
    }
)
