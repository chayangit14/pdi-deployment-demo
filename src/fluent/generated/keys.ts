import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    atf_br_assert_state_message: {
                        table: 'sys_atf_step'
                        id: 'ac4e9d15a0264ffeab1fb9740d615032'
                    }
                    atf_br_insert_incident: {
                        table: 'sys_atf_step'
                        id: 'ef76ec93cda946a89cde90fab0f01235'
                    }
                    atf_br_neg_assert_no_message: {
                        table: 'sys_atf_step'
                        id: '2428b511d0d14edbb40ee6c32baa9945'
                    }
                    atf_br_neg_open_new: {
                        table: 'sys_atf_step'
                        id: '019882abcc904b31a21dbc9522061b45'
                    }
                    atf_br_neg_set_fields: {
                        table: 'sys_atf_step'
                        id: '44021ff89b144da8b36a0004616c716a'
                    }
                    atf_br_neg_submit: {
                        table: 'sys_atf_step'
                        id: '89e3e011ee6448efaa551eb02e70319b'
                    }
                    atf_br_open_incident: {
                        table: 'sys_atf_step'
                        id: '3dd5e8b3590545a4bce4537d2c483323'
                    }
                    atf_br_set_state: {
                        table: 'sys_atf_step'
                        id: 'd40307c71fab4cfeb71f6510408d9b94'
                    }
                    atf_br_state_change_insert_negative: {
                        table: 'sys_atf_test'
                        id: 'b2646692077947049723adba183e8504'
                    }
                    atf_br_state_change_update: {
                        table: 'sys_atf_test'
                        id: '91f40e81ba484c6491d0849d47df5512'
                    }
                    atf_br_submit_update: {
                        table: 'sys_atf_step'
                        id: '84f8e8d0255244df80b2c2052d107195'
                    }
                    atf_br_validate_state: {
                        table: 'sys_atf_step'
                        id: '73abc45a4696459098bc5384713ff834'
                    }
                    atf_cs_assert_onload_message: {
                        table: 'sys_atf_step'
                        id: '114b46eb44364936a4cc2b36c0fa875b'
                    }
                    atf_cs_onload_message: {
                        table: 'sys_atf_test'
                        id: 'db2c63d2018546e1933b725ac1e4735a'
                    }
                    atf_cs_open_new_incident: {
                        table: 'sys_atf_step'
                        id: '5f0ccb7f8ddb4e82be0336663bfde68f'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'f61ab90108f948e89b8f7f33f6f752ff'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '14735d2d545a4cddad44077b45e83623'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '5c11378d21b64682a1d32e78e0f3e270'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '76915c3deb0c4f0b95a4e6d6ab04abd4'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '9226f7b2359b40e2996625b824e9fcca'
                    }
                }
                composite: [
                    {
                        table: 'sys_variable_value'
                        id: '01478e5f9e3f4a1984a8580336afb5c3'
                        key: {
                            document_key: '2428b511d0d14edbb40ee6c32baa9945'
                            variable: 'e216835dffdf3210f972ffffffffff53'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '021d3e3b2f84495f93b30c471106e99a'
                        key: {
                            document_key: '3dd5e8b3590545a4bce4537d2c483323'
                            variable: '74d6e7a0a3023110571967d1361e616b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '08f66fa743b44c4ba7589562c8159651'
                        key: {
                            document_key: '5f0ccb7f8ddb4e82be0336663bfde68f'
                            variable: 'bb84ed825320220002c6435723dc3400'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0a1c0ad3a8e0475bb490b513dba647e6'
                        key: {
                            field: 'record_id'
                            table: 'var__m_atf_input_variable_5f2e0e535332120028bc29cac2dc34d3'
                            id: '3dd5e8b3590545a4bce4537d2c483323'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0db6995865ff4a28b338b278e09ecfb4'
                        key: {
                            document_key: '73abc45a4696459098bc5384713ff834'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '12c6b0b48f2d4ccbb631c017b1cc6288'
                        key: {
                            document_key: 'd40307c71fab4cfeb71f6510408d9b94'
                            variable: 'b3dba2465320220002c6435723dc34f0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1820dc35b4524d96b2078b52d5b0bde2'
                        key: {
                            document_key: '114b46eb44364936a4cc2b36c0fa875b'
                            variable: 'e216835dffdf3210f972ffffffffff53'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1ce98f3da69d4a5eb52c1ec9abdcfbc2'
                        key: {
                            field: 'record_id'
                            table: 'var__m_atf_input_variable_1f39a288df60220062fe6c7a4df2639d'
                            id: '73abc45a4696459098bc5384713ff834'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '271da4b187df4052a96043a2b18c08f0'
                        key: {
                            document_key: 'ef76ec93cda946a89cde90fab0f01235'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3cb2a1cb6a7d4bce8096178e96886748'
                        key: {
                            document_key: 'ef76ec93cda946a89cde90fab0f01235'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '43ed0903fd8d446c96f2c68a7f438b33'
                        key: {
                            document_key: '019882abcc904b31a21dbc9522061b45'
                            variable: 'bb84ed825320220002c6435723dc3400'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4801c6652e2c4e97b8f826ef2322edec'
                        key: {
                            document_key: '44021ff89b144da8b36a0004616c716a'
                            variable: '424ca6465320220002c6435723dc34b5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4f315c3435b84eff94d3914cd6ce2aa8'
                        key: {
                            document_key: '019882abcc904b31a21dbc9522061b45'
                            variable: '6f2a59a4e7133300b5646ea8c2f6a975'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5678cc3e61cb480da3b5cb2707076c78'
                        key: {
                            document_key: '73abc45a4696459098bc5384713ff834'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '685fc49768614823bf0c2404f8feae7e'
                        key: {
                            document_key: '3dd5e8b3590545a4bce4537d2c483323'
                            variable: '6e55da4e53a0220002c6435723dc34a0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '697874dc43f643b7aea164b887c68da8'
                        key: {
                            document_key: '84f8e8d0255244df80b2c2052d107195'
                            variable: 'ae8b91c9ffa333008d3f5d9ad53bf1ba'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6d67a66acc144bf0904ac120e2b9e39a'
                        key: {
                            document_key: '3dd5e8b3590545a4bce4537d2c483323'
                            variable: 'ad351a4e53a0220002c6435723dc34f0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6f69d92a79914b228f4042e8ae04de28'
                        key: {
                            document_key: '73abc45a4696459098bc5384713ff834'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '821804cbf2af49ea8dc1c8dc3b18234f'
                        key: {
                            document_key: '73abc45a4696459098bc5384713ff834'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8505f245c9be4051ac0e578387ec40b0'
                        key: {
                            document_key: '44021ff89b144da8b36a0004616c716a'
                            variable: '946f3c1a0f23330072e6452bc4767eda'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8b3ca6ab97d144308afe95046c5ea80b'
                        key: {
                            document_key: 'ef76ec93cda946a89cde90fab0f01235'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8da00fd7e1be4055a818d7aee67a7de5'
                        key: {
                            document_key: '019882abcc904b31a21dbc9522061b45'
                            variable: '27d4e1c25320220002c6435723dc3486'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8f3bc38a785045dbadd603da9da2a86a'
                        key: {
                            document_key: '73abc45a4696459098bc5384713ff834'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '97e502a4d862456992959bc353cc94a3'
                        key: {
                            document_key: '44021ff89b144da8b36a0004616c716a'
                            variable: 'b3dba2465320220002c6435723dc34f0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9d9d4595789e43dda57f8e15d1d3c28c'
                        key: {
                            document_key: 'd40307c71fab4cfeb71f6510408d9b94'
                            variable: '946f3c1a0f23330072e6452bc4767eda'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a81361708ae44370923263661e6236a3'
                        key: {
                            document_key: '89e3e011ee6448efaa551eb02e70319b'
                            variable: 'c796d40497302200abe4bb7503ac4ad8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ac84e6ae405d4a8bad148151cbd6fc7c'
                        key: {
                            document_key: 'ef76ec93cda946a89cde90fab0f01235'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b5253556140549809dc5ef45f4ac869a'
                        key: {
                            document_key: '84f8e8d0255244df80b2c2052d107195'
                            variable: 'c796d40497302200abe4bb7503ac4ad8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b95c4969632e4f1081ffdbbb44a30a54'
                        key: {
                            document_key: '3dd5e8b3590545a4bce4537d2c483323'
                            variable: 'b124164e53a0220002c6435723dc34c5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bf03bdf10ec2443db48d7d9a6d986a04'
                        key: {
                            document_key: 'd40307c71fab4cfeb71f6510408d9b94'
                            variable: '424ca6465320220002c6435723dc34b5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c0a08d775f214267b622059730672573'
                        key: {
                            document_key: '3dd5e8b3590545a4bce4537d2c483323'
                            variable: 'c2eb56e853422110248dddeeff7b1261'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c11a950f068f4ab7bc277bfd899afcc7'
                        key: {
                            document_key: '5f0ccb7f8ddb4e82be0336663bfde68f'
                            variable: '3a662f60a3023110571967d1361e6134'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c2ac9d95b19a4eba81baa2b5c7e1e230'
                        key: {
                            document_key: 'ac4e9d15a0264ffeab1fb9740d615032'
                            variable: 'e216835dffdf3210f972ffffffffff53'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c59e59be3ad84dfe9dba3d7d3c7d2b86'
                        key: {
                            document_key: '89e3e011ee6448efaa551eb02e70319b'
                            variable: 'ae8b91c9ffa333008d3f5d9ad53bf1ba'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c8a9fbd69581411099772e678029e11b'
                        key: {
                            document_key: '019882abcc904b31a21dbc9522061b45'
                            variable: '3a662f60a3023110571967d1361e6134'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd647b59df0c349c9bfcfce8c4394df12'
                        key: {
                            document_key: '5f0ccb7f8ddb4e82be0336663bfde68f'
                            variable: '6f2a59a4e7133300b5646ea8c2f6a975'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ddb47ba8687c4cb182790a9bad7747e4'
                        key: {
                            document_key: '3dd5e8b3590545a4bce4537d2c483323'
                            variable: '17d732a9c7a333005e5c45b881c26007'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ef4382d8eb544e71839c9442b1d15767'
                        key: {
                            document_key: '5f0ccb7f8ddb4e82be0336663bfde68f'
                            variable: '27d4e1c25320220002c6435723dc3486'
                        }
                    },
                ]
            }
        }
    }
}
