import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
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
            }
        }
    }
}
