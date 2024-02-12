```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/projects/groups/assessments@2018-02-02"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureHybridUseBenefit = "string"
      azureLocation = "string"
      azureOfferCode = "string"
      azurePricingTier = "string"
      azureStorageRedundancy = "string"
      currency = "string"
      discountPercentage = int
      percentile = "string"
      scalingFactor = int
      sizingCriterion = "string"
      stage = "string"
      timeRange = "string"
    }
    eTag = "string"
  })
}

```

### projects/groups/assessments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:groups |
| eTag | For optimistic concurrency control. | string |
| properties | Properties of the assessment. | AssessmentProperties(required) |


### AssessmentProperties

| Name | Description | Value |
|-|-|-|
| azureHybridUseBenefit | AHUB discount on windows virtual machines. | 'No''Unknown''Yes' (required) |
| azureLocation | Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API. | 'AustraliaEast''AustraliaSoutheast''BrazilSouth''CanadaCentral''CanadaEast''CentralIndia''CentralUs''ChinaEast''ChinaNorth''EastAsia''EastUs''EastUs2''GermanyCentral''GermanyNortheast''JapanEast''JapanWest''KoreaCentral''KoreaSouth''NorthCentralUs''NorthEurope''SouthCentralUs''SouthIndia''SoutheastAsia''UkSouth''UkWest''Unknown''WestCentralUs''WestEurope''WestIndia''WestUs''WestUs2' (required) |
| azureOfferCode | Offer code according to which cost estimation is done. | 'MSAZR0003P''MSAZR0022P''MSAZR0023P''MSAZR0025P''MSAZR0029P''MSAZR0036P''MSAZR0044P''MSAZR0059P''MSAZR0060P''MSAZR0062P''MSAZR0063P''MSAZR0064P''MSAZR0111P''MSAZR0120P''MSAZR0121P''MSAZR0122P''MSAZR0123P''MSAZR0124P''MSAZR0125P''MSAZR0126P''MSAZR0127P''MSAZR0128P''MSAZR0129P''MSAZR0130P''MSAZR0144P''MSAZR0148P''MSAZR0149P''MSAZRDE0003P''MSAZRDE0044P''MSMCAZR0044P''MSMCAZR0059P''MSMCAZR0060P''MSMCAZR0063P''MSMCAZR0120P''MSMCAZR0121P''MSMCAZR0125P''MSMCAZR0128P''Unknown' (required) |
| azurePricingTier | Pricing tier for Size evaluation. | 'Basic''Standard' (required) |
| azureStorageRedundancy | Storage Redundancy type offered by Azure. | 'GeoRedundant''LocallyRedundant''ReadAccessGeoRedundant''Unknown''ZoneRedundant' (required) |
| currency | Currency to report prices in. | 'ARS''AUD''BRL''CAD''CHF''CNY''DKK''EUR''GBP''HKD''IDR''INR''JPY''KRW''MXN''MYR''NOK''NZD''RUB''SAR''SEK''TRY''TWD''USD''Unknown''ZAR' (required) |
| discountPercentage | Custom discount percentage to be applied on final costs. Can be in the range [0, 100]. | int (required) |
| percentile | Percentile of performance data used to recommend Azure size. | 'Percentile50''Percentile90''Percentile95''Percentile99' (required) |
| scalingFactor | Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3. | int (required) |
| sizingCriterion | Assessment sizing criterion. | 'AsOnPremises''PerformanceBased' (required) |
| stage | User configurable setting that describes the status of the assessment. | 'Approved''InProgress''UnderReview' (required) |
| timeRange | Time range of performance data used to recommend a size. | 'Day''Month''Week' (required) |


