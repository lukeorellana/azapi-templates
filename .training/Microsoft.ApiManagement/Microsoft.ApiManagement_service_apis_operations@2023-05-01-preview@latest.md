```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/operations@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      method = "string"
      policies = "string"
      request = {
        description = "string"
        headers = [
          {
            defaultValue = "string"
            description = "string"
            examples = {
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
            }
            name = "string"
            required = bool
            schemaId = "string"
            type = "string"
            typeName = "string"
            values = [
              "string"
            ]
          }
        ]
        queryParameters = [
          {
            defaultValue = "string"
            description = "string"
            examples = {
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
            }
            name = "string"
            required = bool
            schemaId = "string"
            type = "string"
            typeName = "string"
            values = [
              "string"
            ]
          }
        ]
        representations = [
          {
            contentType = "string"
            examples = {
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
            }
            formParameters = [
              {
                defaultValue = "string"
                description = "string"
                examples = {
                  {customized property} = {
                    description = "string"
                    externalValue = "string"
                    summary = "string"
                  }
                  {customized property} = {
                    description = "string"
                    externalValue = "string"
                    summary = "string"
                  }
                }
                name = "string"
                required = bool
                schemaId = "string"
                type = "string"
                typeName = "string"
                values = [
                  "string"
                ]
              }
            ]
            schemaId = "string"
            typeName = "string"
          }
        ]
      }
      responses = [
        {
          description = "string"
          headers = [
            {
              defaultValue = "string"
              description = "string"
              examples = {
                {customized property} = {
                  description = "string"
                  externalValue = "string"
                  summary = "string"
                }
                {customized property} = {
                  description = "string"
                  externalValue = "string"
                  summary = "string"
                }
              }
              name = "string"
              required = bool
              schemaId = "string"
              type = "string"
              typeName = "string"
              values = [
                "string"
              ]
            }
          ]
          representations = [
            {
              contentType = "string"
              examples = {
                {customized property} = {
                  description = "string"
                  externalValue = "string"
                  summary = "string"
                }
                {customized property} = {
                  description = "string"
                  externalValue = "string"
                  summary = "string"
                }
              }
              formParameters = [
                {
                  defaultValue = "string"
                  description = "string"
                  examples = {
                    {customized property} = {
                      description = "string"
                      externalValue = "string"
                      summary = "string"
                    }
                    {customized property} = {
                      description = "string"
                      externalValue = "string"
                      summary = "string"
                    }
                  }
                  name = "string"
                  required = bool
                  schemaId = "string"
                  type = "string"
                  typeName = "string"
                  values = [
                    "string"
                  ]
                }
              ]
              schemaId = "string"
              typeName = "string"
            }
          ]
          statusCode = int
        }
      ]
      templateParameters = [
        {
          defaultValue = "string"
          description = "string"
          examples = {
            {customized property} = {
              description = "string"
              externalValue = "string"
              summary = "string"
            }
            {customized property} = {
              description = "string"
              externalValue = "string"
              summary = "string"
            }
          }
          name = "string"
          required = bool
          schemaId = "string"
          type = "string"
          typeName = "string"
          values = [
            "string"
          ]
        }
      ]
      urlTemplate = "string"
    }
  })
}

```

### service/apis/operations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | Properties of the Operation Contract. | OperationContractProperties |


### OperationContractProperties

| Name | Description | Value |
|-|-|-|
| description | Description of the operation. May include HTML formatting tags. | string |
| displayName | Operation Name. | string (required) |
| method | A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them. | string (required) |
| policies | Operation Policies | string |
| request | An entity containing request details. | RequestContract |
| responses | Array of Operation responses. | ResponseContract[] |
| templateParameters | Collection of URL template parameters. | ParameterContract[] |
| urlTemplate | Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date} | string (required) |


### RequestContract

| Name | Description | Value |
|-|-|-|
| description | Operation request description. | string |
| headers | Collection of operation request headers. | ParameterContract[] |
| queryParameters | Collection of operation request query parameters. | ParameterContract[] |
| representations | Collection of operation request representations. | RepresentationContract[] |


### ParameterContract

| Name | Description | Value |
|-|-|-|
| defaultValue | Default parameter value. | string |
| description | Parameter description. | string |
| examples | Exampled defined for the parameter. | ParameterExamplesContract |
| name | Parameter name. | string (required) |
| required | Specifies whether parameter is required or not. | bool |
| schemaId | Schema identifier. | string |
| type | Parameter type. | string (required) |
| typeName | Type name defined by the schema. | string |
| values | Parameter values. | string[] |


### ParameterExamplesContract

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ParameterExampleContract |
| {customized property} |  | ParameterExampleContract |


### ParameterExampleContract

| Name | Description | Value |
|-|-|-|
| description | Long description for the example | string |
| externalValue | A URL that points to the literal example | string |
| summary | Short description for the example | string |
| value | Example value. May be a primitive value, or an object. | For Bicep, you can use theany()function. |


### RepresentationContract

| Name | Description | Value |
|-|-|-|
| contentType | Specifies a registered or custom content type for this representation, e.g. application/xml. | string (required) |
| examples | Exampled defined for the representation. | ParameterExamplesContract |
| formParameters | Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'.. | ParameterContract[] |
| schemaId | Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'. | string |
| typeName | Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'. | string |


### ResponseContract

| Name | Description | Value |
|-|-|-|
| description | Operation response description. | string |
| headers | Collection of operation response headers. | ParameterContract[] |
| representations | Collection of operation response representations. | RepresentationContract[] |
| statusCode | Operation response HTTP status code. | int (required) |


