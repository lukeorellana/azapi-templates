```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/extensions@2021-02-01"
  name = "MSDeploy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appOffline = bool
      connectionString = "string"
      dbType = "string"
      packageUri = "string"
      setParameters = {}
      setParametersXmlFileUri = "string"
      skipAppData = bool
    }
    kind = "string"
  })
}

```

### sites/extensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'MSDeploy' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | Core resource properties | MSDeployCoreOrMSDeployStatusProperties |


### MSDeployCoreOrMSDeployStatusProperties

| Name | Description | Value |
|-|-|-|
| appOffline | Sets the AppOffline rule while the MSDeploy operation executes.Setting isfalseby default. | bool |
| connectionString | SQL Connection String | string |
| dbType | Database Type | string |
| packageUri | Package URI | string |
| setParameters | MSDeploy Parameters. Must not be set if SetParametersXmlFileUri is used. | object |
| setParametersXmlFileUri | URI of MSDeploy Parameters file. Must not be set if SetParameters is used. | string |
| skipAppData | Controls whether the MSDeploy operation skips the App_Data directory.If set totrue, the existing App_Data directory on the destinationwill not be deleted, and any App_Data directory in the source will be ignored.Setting isfalseby default. | bool |


