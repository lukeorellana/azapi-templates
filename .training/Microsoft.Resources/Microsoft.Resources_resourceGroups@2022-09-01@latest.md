```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Resources/resourceGroups@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    managedBy = "string"
  })
}

```

### resourceGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-90Valid characters:Underscores, hyphens, periods, parentheses, and letters or digits as defined by theChar.IsLetterOrDigitfunction.Valid characters are members of the following categories inUnicodeCategory:UppercaseLetter,LowercaseLetter,TitlecaseLetter,ModifierLetter,OtherLetter,DecimalDigitNumber.Can't end with period. |
| location | The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations. | string (required) |
| tags | The tags attached to the resource group. | Dictionary of tag names and values. SeeTags in templates |
| managedBy | The ID of the resource that manages this resource group. | string |
| properties | The resource group properties. | ResourceGroupProperties |


