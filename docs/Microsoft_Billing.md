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

