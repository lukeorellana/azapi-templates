```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/sims@2022-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      authenticationKey = "string"
      deviceType = "string"
      integratedCircuitCardIdentifier = "string"
      internationalMobileSubscriberIdentity = "string"
      mobileNetwork = {
        id = "string"
      }
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

### sims

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Sim Properties. | SimPropertiesFormat(required) |


### SimPropertiesFormat

| Name | Description | Value |
|-|-|-|
| authenticationKey | The ki value for the sim. | stringConstraints:Sensitive value. Pass in as a secure parameter.Pattern =^[0-9a-fA-F]{32}$ |
| deviceType | An optional free-form text field that can be used to record the device type this sim is associated with, for example 'Video camera'. The Azure portal allows Sims to be grouped and filtered based on this value. | string |
| integratedCircuitCardIdentifier | The Integrated Circuit Card ID (ICC Id) for the sim. | stringConstraints:Pattern =^89[0-9]{17,18}$ |
| internationalMobileSubscriberIdentity | The International Mobile Subscriber Identity (IMSI) for the sim. | string (required)Constraints:Pattern =^[0-9]{5,15}$ |
| mobileNetwork | Mobile network that this sim belongs to | MobileNetworkResourceId |
| operatorKeyCode | The Opc value for the sim. | stringConstraints:Sensitive value. Pass in as a secure parameter.Pattern =^[0-9a-fA-F]{32}$ |
| simPolicy | The simPolicy used by this sim. | SimPolicyResourceId |
| staticIpConfiguration | A list of static IP addresses assigned to this sim. Each address is assigned at a defined network scope, made up of {attached data network, slice}. | SimStaticIpProperties[]Constraints:Min length = 1 |


### MobileNetworkResourceId

| Name | Description | Value |
|-|-|-|
| id | Mobile Network resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$ |


### SimPolicyResourceId

| Name | Description | Value |
|-|-|-|
| id | SIM Policy resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][iI][mM][pP][oO][lL][iI][cC][iI][eE][sS]/[^/?#]+$ |


### SimStaticIpProperties

| Name | Description | Value |
|-|-|-|
| attachedDataNetwork | The attached data network on which the static IP address will be used. The combination of attachedDataNetwork and slice defines the network scope of the IP address. | AttachedDataNetworkResourceId |
| slice | The network slice on which the static IP address will be used. The combination of attachedDataNetwork and slice defines the network scope of the IP address. | SliceResourceId |
| staticIp | The static IP configuration for the sim to use at the defined network scope. | SimStaticIpPropertiesStaticIp |


### AttachedDataNetworkResourceId

| Name | Description | Value |
|-|-|-|
| id | Attached Data Network resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[pP][aA][cC][kK][eE][tT][cC][oO][rR][eE][cC][oO][nN][tT][rR][oO][lL][pP][lL][aA][nN][eE][sS]/[^/?#]+/[pP][aA][cC][kK][eE][tT][cC][oO][rR][eE][dD][aA][tT][aA][pP][lL][aA][nN][eE][sS]/[^/?#]+/[aA][tT][tT][aA][cC][hH][eE][dD][dD][aA][tT][aA][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$ |


### SliceResourceId

| Name | Description | Value |
|-|-|-|
| id | Slice resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][lL][iI][cC][eE][sS]/[^/?#]+$ |


### SimStaticIpPropertiesStaticIp

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address assigned to the sim at this network scope. This address must be in the userEquipmentStaticAddressPoolPrefix defined in the attachedDataNetwork. | stringConstraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$ |


