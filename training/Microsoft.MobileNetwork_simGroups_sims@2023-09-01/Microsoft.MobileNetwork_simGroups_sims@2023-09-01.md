```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/simGroups/sims@2023-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authenticationKey = "string"
      deviceType = "string"
      integratedCircuitCardIdentifier = "string"
      internationalMobileSubscriberIdentity = "string"
      operatorKeyCode = "string"
      simPolicy = {
        id = "string"
      }
      staticIpConfiguration = [
        {
          attachedDataNetwork = {
            id = "string"
          }
          slice = {
            id = "string"
          }
          staticIp = {
            ipv4Address = "string"
          }
        }
      ]
    }
  })
}

```

### simGroups/sims

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumeric, underscores and hyphensStart with alphanumeric |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:simGroups |
| properties | SIM Properties. | SimPropertiesFormat(required) |


### SimPropertiesFormat

| Name | Description | Value |
|-|-|-|
| authenticationKey | The Ki value for the SIM. | stringConstraints:Sensitive value. Pass in as a secure parameter.Pattern =^[0-9a-fA-F]{32}$ |
| deviceType | An optional free-form text field that can be used to record the device type this SIM is associated with, for example 'Video camera'. The Azure portal allows SIMs to be grouped and filtered based on this value. | string |
| integratedCircuitCardIdentifier | The integrated circuit card ID (ICCID) for the SIM. | stringConstraints:Pattern =^[0-9]{10,20}$ |
| internationalMobileSubscriberIdentity | The international mobile subscriber identity (IMSI) for the SIM. | string (required)Constraints:Pattern =^[0-9]{5,15}$ |
| operatorKeyCode | The Opc value for the SIM. | stringConstraints:Sensitive value. Pass in as a secure parameter.Pattern =^[0-9a-fA-F]{32}$ |
| simPolicy | The SIM policy used by this SIM. The SIM policy must be in the same location as the SIM. | SimPolicyResourceId |
| staticIpConfiguration | A list of static IP addresses assigned to this SIM. Each address is assigned at a defined network scope, made up of {attached data network, slice}. | SimStaticIpProperties[]Constraints:Min length = 1 |


### SimPolicyResourceId

| Name | Description | Value |
|-|-|-|
| id | SIM policy resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][iI][mM][pP][oO][lL][iI][cC][iI][eE][sS]/[^/?#]+$ |


### SimStaticIpProperties

| Name | Description | Value |
|-|-|-|
| attachedDataNetwork | The attached data network on which the static IP address will be used. The combination of attached data network and slice defines the network scope of the IP address. The attached data network must be in the same location as the SIM. | AttachedDataNetworkResourceId |
| slice | The network slice on which the static IP address will be used. The combination of attached data network and slice defines the network scope of the IP address. The slice must be in the same location as the SIM. | SliceResourceId |
| staticIp | The static IP configuration for the SIM to use at the defined network scope. | SimStaticIpPropertiesStaticIp |


### AttachedDataNetworkResourceId

| Name | Description | Value |
|-|-|-|
| id | Attached data network resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[pP][aA][cC][kK][eE][tT][cC][oO][rR][eE][cC][oO][nN][tT][rR][oO][lL][pP][lL][aA][nN][eE][sS]/[^/?#]+/[pP][aA][cC][kK][eE][tT][cC][oO][rR][eE][dD][aA][tT][aA][pP][lL][aA][nN][eE][sS]/[^/?#]+/[aA][tT][tT][aA][cC][hH][eE][dD][dD][aA][tT][aA][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$ |


### SliceResourceId

| Name | Description | Value |
|-|-|-|
| id | Slice resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][lL][iI][cC][eE][sS]/[^/?#]+$ |


### SimStaticIpPropertiesStaticIp

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address assigned to the SIM at this network scope. This address must be in the userEquipmentStaticAddressPoolPrefix defined in the attached data network. | stringConstraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$ |


