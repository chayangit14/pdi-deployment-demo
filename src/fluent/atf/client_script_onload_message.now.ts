import { Test } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

/**
 * Covers my_client_script (onLoad on incident): shows "Table loaded successfully!!".
 */
Test(
    {
        $id: Now.ID['atf_cs_onload_message'],
        name: 'Client Script: onLoad info message',
        description:
            'Opens a new incident form and asserts my_client_script shows the info message "Table loaded successfully!!" via g_form.addInfoMessage on onLoad.',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        atf.form.openNewForm({
            $id: Now.ID['atf_cs_open_new_incident'],
            table: 'incident',
            formUI: 'standard_ui',
        })

        atf.uiTestScript.runTest({
            $id: Now.ID['atf_cs_assert_onload_message'],
            script: Now.include('./client_script_onload_message.script.js'),
        })
    }
)
