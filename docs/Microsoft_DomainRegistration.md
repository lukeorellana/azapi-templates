## Microsoft.DomainRegistration/domains@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DomainRegistration/domains@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      authCode = "string"
      autoRenew = bool
      consent = {
        agreedAt = "string"
        agreedBy = "string"
        agreementKeys = [
          "string"
        ]
      }
      contactAdmin = {
        addressMailing = {
          address1 = "string"
          address2 = "string"
          city = "string"
          country = "string"
          postalCode = "string"
          state = "string"
        }
        email = "string"
        fax = "string"
        jobTitle = "string"
        nameFirst = "string"
        nameLast = "string"
        nameMiddle = "string"
        organization = "string"
        phone = "string"
      }
      contactBilling = {
        addressMailing = {
          address1 = "string"
          address2 = "string"
          city = "string"
          country = "string"
          postalCode = "string"
          state = "string"
        }
        email = "string"
        fax = "string"
        jobTitle = "string"
        nameFirst = "string"
        nameLast = "string"
        nameMiddle = "string"
        organization = "string"
        phone = "string"
      }
      contactRegistrant = {
        addressMailing = {
          address1 = "string"
          address2 = "string"
          city = "string"
          country = "string"
          postalCode = "string"
          state = "string"
        }
        email = "string"
        fax = "string"
        jobTitle = "string"
        nameFirst = "string"
        nameLast = "string"
        nameMiddle = "string"
        organization = "string"
        phone = "string"
      }
      contactTech = {
        addressMailing = {
          address1 = "string"
          address2 = "string"
          city = "string"
          country = "string"
          postalCode = "string"
          state = "string"
        }
        email = "string"
        fax = "string"
        jobTitle = "string"
        nameFirst = "string"
        nameLast = "string"
        nameMiddle = "string"
        organization = "string"
        phone = "string"
      }
      dnsType = "string"
      dnsZoneId = "string"
      privacy = bool
      targetDnsType = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      ownershipId = "string"
    }
    kind = "string"
  })
}

```

