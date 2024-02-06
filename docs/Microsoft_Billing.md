## Microsoft.Billing/billingAccounts/billingProfiles@2020-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/billingProfiles@2020-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      billTo = {
        addressLine1 = "string"
        addressLine2 = "string"
        addressLine3 = "string"
        city = "string"
        companyName = "string"
        country = "string"
        district = "string"
        email = "string"
        firstName = "string"
        lastName = "string"
        middleName = "string"
        phoneNumber = "string"
        postalCode = "string"
        region = "string"
      }
      displayName = "string"
      enabledAzurePlans = [
        {
          skuId = "string"
        }
      ]
      invoiceEmailOptIn = bool
      invoiceSections = {
        value = [
          {
            properties = {
              displayName = "string"
              labels = {}
              tags = {}
            }
          }
        ]
      }
      poNumber = "string"
      tags = {}
    }
  })
}

```

### billingAccounts/billingProfiles

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: billingAccounts |
| properties | The properties of the billing profile. | BillingProfileProperties |


### BillingProfileProperties

| Name | Description | Value |
|-|-|-|
| billTo | Billing address. | AddressDetails |
| displayName | The name of the billing profile. | string |
| enabledAzurePlans | Information about the enabled azure plans. | AzurePlan[] |
| invoiceEmailOptIn | Flag controlling whether the invoices for the billing profile are sent through email. | bool |
| invoiceSections | The invoice sections associated to the billing profile. By default this is not populated, unless it's specified in $expand. | InvoiceSectionsOnExpand |
| poNumber | The purchase order name that will appear on the invoices generated for the billing profile. | string |
| tags | Tags of billing profiles. | object |


### AddressDetails

| Name | Description | Value |
|-|-|-|
| addressLine1 | Address line 1. | string (required) |
| addressLine2 | Address line 2. | string |
| addressLine3 | Address line 3. | string |
| city | Address city. | string |
| companyName | Company name. | string |
| country | Country code uses ISO2, 2-digit format. | string (required) |
| district | Address district. | string |
| email | Email address. | string |
| firstName | First name. | string |
| lastName | Last name. | string |
| middleName | Middle name. | string |
| phoneNumber | Phone number. | string |
| postalCode | Postal code. | string |
| region | Address region. | string |


### AzurePlan

| Name | Description | Value |
|-|-|-|
| skuId | The sku id. | string |


### InvoiceSectionsOnExpand

| Name | Description | Value |
|-|-|-|
| value | The invoice sections associated to the billing profile. | InvoiceSection[] |


### InvoiceSection

| Name | Description | Value |
|-|-|-|
| properties | The properties of an invoice section. | InvoiceSectionProperties |


### InvoiceSectionProperties

| Name | Description | Value |
|-|-|-|
| displayName | The name of the invoice section. | string |
| labels | Dictionary of metadata associated with the invoice section. | object |
| tags | Dictionary of metadata associated with the invoice section. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain { } % & \ ? / | object |
## Microsoft.Billing/billingAccounts/billingProfiles/instructions@2020-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/billingProfiles/instructions@2020-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      amount = int
      creationDate = "string"
      endDate = "string"
      startDate = "string"
    }
  })
}

```

### billingAccounts/billingProfiles/instructions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:billingProfiles |
| properties | A billing instruction used during invoice generation. | InstructionProperties |


### InstructionProperties

| Name | Description | Value |
|-|-|-|
| amount | The amount budgeted for this billing instruction. | int (required) |
| creationDate | The date this billing instruction was created. | string |
| endDate | The date this billing instruction is no longer in effect. | string (required) |
| startDate | The date this billing instruction goes into effect. | string (required) |
## Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections@2020-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections@2020-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      labels = {}
      tags = {}
    }
  })
}

```

### billingAccounts/billingProfiles/invoiceSections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:billingProfiles |
| properties | The properties of an invoice section. | InvoiceSectionProperties |


### InvoiceSectionProperties

| Name | Description | Value |
|-|-|-|
| displayName | The name of the invoice section. | string |
| labels | Dictionary of metadata associated with the invoice section. | object |
| tags | Dictionary of metadata associated with the invoice section. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain { } % & \ ? / | object |
## Microsoft.Billing/billingAccounts/billingProfiles/policies@2020-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/billingProfiles/policies@2020-05-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      marketplacePurchases = "string"
      reservationPurchases = "string"
      viewCharges = "string"
    }
  })
}

```

### billingAccounts/billingProfiles/policies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:billingProfiles |
| properties | The properties of a policy. | PolicyProperties |


### PolicyProperties

| Name | Description | Value |
|-|-|-|
| marketplacePurchases | The policy that controls whether Azure marketplace purchases are allowed for a billing profile. | 'AllAllowed''NotAllowed''OnlyFreeAllowed' |
| reservationPurchases | The policy that controls whether Azure reservation purchases are allowed for a billing profile. | 'Allowed''NotAllowed' |
| viewCharges | The policy that controls whether users with Azure RBAC access to a subscription can view its charges. | 'Allowed''NotAllowed' |
## Microsoft.Billing/billingAccounts/billingSubscriptionAliases@2021-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/billingSubscriptionAliases@2021-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoRenew = "string"
      beneficiaryTenantId = "string"
      billingFrequency = "string"
      billingProfileId = "string"
      consumptionCostCenter = "string"
      customerId = "string"
      displayName = "string"
      invoiceSectionId = "string"
      productTypeId = "string"
      quantity = int
      skuId = "string"
      termDuration = "string"
    }
  })
}

```

### billingAccounts/billingSubscriptionAliases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: billingAccounts |
| properties | Billing subscription alias properties. | BillingSubscriptionAliasProperties |


### BillingSubscriptionAliasProperties

| Name | Description | Value |
|-|-|-|
| autoRenew | Indicates whether auto renewal is turned on or off for a subscription. | 'Off''On' |
| beneficiaryTenantId | The provisioning tenant of the subscription. | string |
| billingFrequency | The billing frequency of the subscription in the ISO8601 format. Example: P1M, P3M, P1Y | string |
| billingProfileId | The ID of the billing profile to which the subscription is billed. This field is only applicable for Microsoft Customer Agreement billing accounts. | string |
| consumptionCostCenter | The cost center applied to the subscription. This field is only available for consumption subscriptions of Microsoft Customer Agreement Type billing accounts. | string |
| customerId | The ID of the customer for whom the subscription was created. The field is applicable only for Microsoft Partner Agreement billing accounts. | string |
| displayName | The name of the subscription. | string |
| invoiceSectionId | The ID of the invoice section to which the subscription is billed. The field is applicable only for Microsoft Partner Agreement billing accounts. | string |
| productTypeId | The ID of the product for which the subscription is purchased | string |
| quantity | The number of licenses purchased for the subscription | int |
| skuId | The SKU ID of the product for which the subscription is purchased. This field is only available for Microsoft Customer Agreement billing accounts. | string |
| termDuration | The duration for which you can use the subscription. Example P1Y and P1M | string |
## Microsoft.Billing/billingAccounts/customers/policies@2020-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/customers/policies@2020-05-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      viewCharges = "string"
    }
  })
}

```

### billingAccounts/customers/policies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: customers |
| properties | The properties of a customer's policy. | CustomerPolicyProperties |


### CustomerPolicyProperties

| Name | Description | Value |
|-|-|-|
| viewCharges | The policy that controls whether the users in customer's organization can view charges at pay-as-you-go prices. | 'Allowed''NotAllowed' |
## Microsoft.Billing/billingAccounts/departments/billingRoleAssignments@2019-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/departments/billingRoleAssignments@2019-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalId = "string"
      principalTenantId = "string"
      roleDefinitionId = "string"
      userAuthenticationType = "string"
      userEmailAddress = "string"
    }
  })
}

```

### billingAccounts/departments/billingRoleAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: departments |
| properties | The properties of the role assignment. | BillingRoleAssignmentProperties |


### BillingRoleAssignmentProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal id of the user to whom the role was assigned. | string |
| principalTenantId | The principal tenant id of the user to whom the role was assigned. | string |
| roleDefinitionId | The ID of the role definition. | string |
| userAuthenticationType | The authentication type of the user, whether Organization or MSA, of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement. | string |
| userEmailAddress | The email address of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement. | string |
## Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments@2019-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments@2019-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalId = "string"
      principalTenantId = "string"
      roleDefinitionId = "string"
      userAuthenticationType = "string"
      userEmailAddress = "string"
    }
  })
}

```

### billingAccounts/enrollmentAccounts/billingRoleAssign...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: enrollmentAccounts |
| properties | The properties of the role assignment. | BillingRoleAssignmentProperties |


### BillingRoleAssignmentProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal id of the user to whom the role was assigned. | string |
| principalTenantId | The principal tenant id of the user to whom the role was assigned. | string |
| roleDefinitionId | The ID of the role definition. | string |
| userAuthenticationType | The authentication type of the user, whether Organization or MSA, of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement. | string |
| userEmailAddress | The email address of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement. | string |
## Microsoft.Billing/billingAccounts/invoiceSections@2018-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/invoiceSections@2018-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      billingProfiles = [
        {
          properties = {
            address = {
              addressLine1 = "string"
              addressLine2 = "string"
              addressLine3 = "string"
              city = "string"
              companyName = "string"
              country = "string"
              firstName = "string"
              lastName = "string"
              postalCode = "string"
              region = "string"
            }
            displayName = "string"
            enabledAzureSKUs = [
              {
                skuId = "string"
              }
            ]
            invoiceSections = [
              {
                properties = {}
            ]
            poNumber = "string"
          }
        }
      ]
      displayName = "string"
    }
  })
}

```

### billingAccounts/invoiceSections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: billingAccounts |
| properties | The InvoiceSection. | InvoiceSectionProperties |


### InvoiceSectionProperties

| Name | Description | Value |
|-|-|-|
| billingProfiles | The billing profiles associated to the billing account. | BillingProfile[] |
| displayName | The name of the InvoiceSection. | string |


### BillingProfile

| Name | Description | Value |
|-|-|-|
| properties | A billing profile. | BillingProfileProperties |


### BillingProfileProperties

| Name | Description | Value |
|-|-|-|
| address | Billing address. | Address |
| displayName | The billing profile name. | string |
| enabledAzureSKUs | Information about the product. | EnabledAzureSKUs[] |
| invoiceSections | The invoice sections associated to the billing profile. | InvoiceSection[] |
| poNumber | Purchase order number. | string |


### Address

| Name | Description | Value |
|-|-|-|
| addressLine1 | Address Line1. | string |
| addressLine2 | Address Line2. | string |
| addressLine3 | Address Line3. | string |
| city | Address City. | string |
| companyName | Company Name. | string |
| country | Country code uses ISO2, 2-digit format. | string |
| firstName | First Name. | string |
| lastName | Last Name. | string |
| postalCode | Address Postal Code. | string |
| region | Address Region. | string |


### EnabledAzureSKUs

| Name | Description | Value |
|-|-|-|
| skuId | The sku id. | string |


### InvoiceSection

| Name | Description | Value |
|-|-|-|
| properties | The InvoiceSection. | InvoiceSectionProperties |
## Microsoft.Billing/billingAccounts/lineOfCredit@2018-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/lineOfCredit@2018-11-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      creditLimit = {
        value = int
      }
      status = "string"
    }
  })
}

```

### billingAccounts/lineOfCredit

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: billingAccounts |
| properties | A line of credit. | LineOfCreditProperties |


### LineOfCreditProperties

| Name | Description | Value |
|-|-|-|
| creditLimit | The current credit limit. | Amount |
| status | The line of credit status. | 'Approved''Rejected' |


### Amount

| Name | Description | Value |
|-|-|-|
| value | Amount value. | int |
## Microsoft.Billing/promotions@2020-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/promotions@2020-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appliedScopes = [
        "string"
      ]
      displayName = "string"
      orderId = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

### promotions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| sku |  | PromotionCreateSkuNameRequestProperties |
| properties |  | PromotionCreateRequestPropertiesOrPromotionResponseP... |


### PromotionCreateRequestPropertiesOrPromotionResponseP...

| Name | Description | Value |
|-|-|-|
| appliedScopes | List of subscriptions getting the benefit of the promotion. | string[] |
| displayName | Friendly name for user to easily identified the promotion. | string |
| orderId | Unique Id for the promotion order. | string |


### PromotionCreateSkuNameRequestProperties

| Name | Description | Value |
|-|-|-|
| name | SKU Name of the promotion to activate | string |
