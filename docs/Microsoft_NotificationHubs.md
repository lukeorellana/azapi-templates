## Microsoft.NotificationHubs/namespaces@2017-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NotificationHubs/namespaces@2017-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      createdAt = "string"
      critical = bool
      dataCenter = "string"
      enabled = bool
      name = "string"
      namespaceType = "string"
      provisioningState = "string"
      region = "string"
      scaleUnit = "string"
      serviceBusEndpoint = "string"
      status = "string"
      subscriptionId = "string"
      updatedAt = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### namespaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 6-50Valid characters:Alphanumerics and hyphensStart with letter. End with alphanumeric.Resource name must be unique across Azure. |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku of the created namespace | Sku |
| properties | Properties of the Namespace. | NamespaceProperties |


### NamespaceProperties

| Name | Description | Value |
|-|-|-|
| createdAt | The time the namespace was created. | string |
| critical | Whether or not the namespace is set as Critical. | bool |
| dataCenter | Data center for the namespace | string |
| enabled | Whether or not the namespace is currently enabled. | bool |
| name | The name of the namespace. | string |
| namespaceType | The namespace type. | 'Messaging''NotificationHub' |
| provisioningState | Provisioning state of the Namespace. | string |
| region | Specifies the targeted region in which the namespace should be created. It can be any of the following values: Australia East, Australia Southeast, Central US, East US, East US 2, West US, North Central US, South Central US, East Asia, Southeast Asia, Brazil South, Japan East, Japan West, North Europe, West Europe | string |
| scaleUnit | ScaleUnit where the namespace gets created | string |
| serviceBusEndpoint | Endpoint you can use to perform NotificationHub operations. | string |
| status | Status of the namespace. It can be any of these values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting | string |
| subscriptionId | The Id of the Azure subscription associated with the namespace. | string |
| updatedAt | The time the namespace was updated. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | The capacity of the resource | int |
| family | The Sku Family | string |
| name | Name of the notification hub sku | 'Basic''Free''Standard' (required) |
| size | The Sku size | string |
| tier | The tier of particular sku | string |
## Microsoft.NotificationHubs/namespaces/AuthorizationRules@2017-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NotificationHubs/namespaces/AuthorizationRules@2017-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rights = [
        "string"
      ]
    }
  })
}

```

### namespaces/AuthorizationRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-256Valid characters:Alphanumerics, periods, hyphens, and underscores.Start alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties of the Namespace AuthorizationRules. | SharedAccessAuthorizationRuleProperties(required) |


### SharedAccessAuthorizationRuleProperties

| Name | Description | Value |
|-|-|-|
| rights | The rights associated with the rule. | String array containing any of:'Listen''Manage''Send' |
## Microsoft.NotificationHubs/namespaces/notificationHubs@2017-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NotificationHubs/namespaces/notificationHubs@2017-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      admCredential = {
        properties = {
          authTokenUrl = "string"
          clientId = "string"
          clientSecret = "string"
        }
      }
      apnsCredential = {
        properties = {
          apnsCertificate = "string"
          appId = "string"
          appName = "string"
          certificateKey = "string"
          endpoint = "string"
          keyId = "string"
          thumbprint = "string"
          token = "string"
        }
      }
      authorizationRules = [
        {
          rights = [
            "string"
          ]
        }
      ]
      baiduCredential = {
        properties = {
          baiduApiKey = "string"
          baiduEndPoint = "string"
          baiduSecretKey = "string"
        }
      }
      gcmCredential = {
        properties = {
          gcmEndpoint = "string"
          googleApiKey = "string"
        }
      }
      mpnsCredential = {
        properties = {
          certificateKey = "string"
          mpnsCertificate = "string"
          thumbprint = "string"
        }
      }
      name = "string"
      registrationTtl = "string"
      wnsCredential = {
        properties = {
          packageSid = "string"
          secretKey = "string"
          windowsLiveEndpoint = "string"
        }
      }
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### namespaces/notificationHubs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Alphanumerics, periods, hyphens, and underscores.Start alphanumeric. |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku of the created namespace | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties of the NotificationHub. | NotificationHubProperties(required) |


### NotificationHubProperties

| Name | Description | Value |
|-|-|-|
| admCredential | The AdmCredential of the created NotificationHub | AdmCredential |
| apnsCredential | The ApnsCredential of the created NotificationHub | ApnsCredential |
| authorizationRules | The AuthorizationRules of the created NotificationHub | SharedAccessAuthorizationRuleProperties[] |
| baiduCredential | The BaiduCredential of the created NotificationHub | BaiduCredential |
| gcmCredential | The GcmCredential of the created NotificationHub | GcmCredential |
| mpnsCredential | The MpnsCredential of the created NotificationHub | MpnsCredential |
| name | The NotificationHub name. | string |
| registrationTtl | The RegistrationTtl of the created NotificationHub | string |
| wnsCredential | The WnsCredential of the created NotificationHub | WnsCredential |


### AdmCredential

| Name | Description | Value |
|-|-|-|
| properties | Properties of NotificationHub AdmCredential. | AdmCredentialProperties |


### AdmCredentialProperties

| Name | Description | Value |
|-|-|-|
| authTokenUrl | The URL of the authorization token. | string |
| clientId | The client identifier. | string |
| clientSecret | The credential secret access key. | string |


### ApnsCredential

| Name | Description | Value |
|-|-|-|
| properties | Properties of NotificationHub ApnsCredential. | ApnsCredentialProperties |


### ApnsCredentialProperties

| Name | Description | Value |
|-|-|-|
| apnsCertificate | The APNS certificate. Specify if using Certificate Authentication Mode. | string |
| appId | The issuer (iss) registered claim key. The value is a 10-character TeamId, obtained from your developer account. Specify if using Token Authentication Mode. | string |
| appName | The name of the application or BundleId. Specify if using Token Authentication Mode. | string |
| certificateKey | The APNS certificate password if it exists. | string |
| endpoint | The APNS endpoint of this credential. If using Certificate Authentication Mode and Sandbox specify 'gateway.sandbox.push.apple.com'. If using Certificate Authentication Mode and Production specify 'gateway.push.apple.com'. If using Token Authentication Mode and Sandbox specify 'https://api.development.push.apple.com:443/3/device'. If using Token Authentication Mode and Production specify 'https://api.push.apple.com:443/3/device'. | string |
| keyId | A 10-character key identifier (kid) key, obtained from your developer account. Specify if using Token Authentication Mode. | string |
| thumbprint | The APNS certificate thumbprint. Specify if using Certificate Authentication Mode. | string |
| token | Provider Authentication Token, obtained through your developer account. Specify if using Token Authentication Mode. | string |


### SharedAccessAuthorizationRuleProperties

| Name | Description | Value |
|-|-|-|
| rights | The rights associated with the rule. | String array containing any of:'Listen''Manage''Send' |


### BaiduCredential

| Name | Description | Value |
|-|-|-|
| properties | Properties of NotificationHub BaiduCredential. | BaiduCredentialProperties |


### BaiduCredentialProperties

| Name | Description | Value |
|-|-|-|
| baiduApiKey | Baidu Api Key. | string |
| baiduEndPoint | Baidu Endpoint. | string |
| baiduSecretKey | Baidu Secret Key | string |


### GcmCredential

| Name | Description | Value |
|-|-|-|
| properties | Properties of NotificationHub GcmCredential. | GcmCredentialProperties |


### GcmCredentialProperties

| Name | Description | Value |
|-|-|-|
| gcmEndpoint | The FCM legacy endpoint. Default value is 'https://fcm.googleapis.com/fcm/send' | string |
| googleApiKey | The Google API key. | string |


### MpnsCredential

| Name | Description | Value |
|-|-|-|
| properties | Properties of NotificationHub MpnsCredential. | MpnsCredentialProperties |


### MpnsCredentialProperties

| Name | Description | Value |
|-|-|-|
| certificateKey | The certificate key for this credential. | string |
| mpnsCertificate | The MPNS certificate. | string |
| thumbprint | The MPNS certificate Thumbprint | string |


### WnsCredential

| Name | Description | Value |
|-|-|-|
| properties | Properties of NotificationHub WnsCredential. | WnsCredentialProperties |


### WnsCredentialProperties

| Name | Description | Value |
|-|-|-|
| packageSid | The package ID for this credential. | string |
| secretKey | The secret key. | string |
| windowsLiveEndpoint | The Windows Live endpoint. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | The capacity of the resource | int |
| family | The Sku Family | string |
| name | Name of the notification hub sku | 'Basic''Free''Standard' (required) |
| size | The Sku size | string |
| tier | The tier of particular sku | string |
## Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2017-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2017-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rights = [
        "string"
      ]
    }
  })
}

```

### namespaces/notificationHubs/AuthorizationRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-256Valid characters:Alphanumerics, periods, hyphens, and underscores.Start alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:notificationHubs |
| properties | Properties of the Namespace AuthorizationRules. | SharedAccessAuthorizationRuleProperties(required) |


### SharedAccessAuthorizationRuleProperties

| Name | Description | Value |
|-|-|-|
| rights | The rights associated with the rule. | String array containing any of:'Listen''Manage''Send' |
