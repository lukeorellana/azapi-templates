import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface WebServerfarmsProps extends IAzAPIBaseProps {

}

export class WebServerfarms extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebServerfarmsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/serverfarms@2022-09-01";
  }

  protected getResourceBody(props: WebServerfarmsProps): string {
    return JSON.stringify(
      {properties: {elasticScaleEnabled: "${bool}", freeOfferExpirationTime: "string", hostingEnvironmentProfile: {id: "string"}, hyperV: "${bool}", isSpot: "${bool}", isXenon: "${bool}", kubeEnvironmentProfile: {id: "string"}, maximumElasticWorkerCount: int, perSiteScaling: "${bool}", reserved: "${bool}", spotExpirationTime: "string", targetWorkerCount: int, targetWorkerSizeId: int, workerTierName: "string", zoneRedundant: "${bool}"}, sku: {capabilities: [{name: "string", reason: "string", value: "string"}], capacity: int, family: "string", locations: ["string"], name: "string", size: "string", skuCapacity: {default: int, elasticMaximum: int, maximum: int, minimum: int, scaleType: "string"}, tier: "string"}, kind: "string", extendedLocation: {name: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 1-60Valid characters:Alphanumeric, hyphens and Unicode characters that can be mapped to Punycode |
// | location | Resource Location. | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | sku | Description of a SKU for a scalable resource. | SkuDescription |
// | kind | Kind of resource. | string |
// | extendedLocation | Extended Location. | ExtendedLocation |
// | properties | AppServicePlan resource specific properties | AppServicePlanProperties |

// | Name | Description | Value |
// |-|-|-|
// | name | Name of extended location. | string |

// | Name | Description | Value |
// |-|-|-|
// | elasticScaleEnabled | ServerFarm supports ElasticScale. Apps in this plan will scale as if the ServerFarm was ElasticPremium sku | bool |
// | freeOfferExpirationTime | The time when the server farm free offer expires. | string |
// | hostingEnvironmentProfile | Specification for the App Service Environment to use for the App Service plan. | HostingEnvironmentProfile |
// | hyperV | If Hyper-V container app service plantrue,falseotherwise. | bool |
// | isSpot | Iftrue, this App Service Plan owns spot instances. | bool |
// | isXenon | Obsolete: If Hyper-V container app service plantrue,falseotherwise. | bool |
// | kubeEnvironmentProfile | Specification for the Kubernetes Environment to use for the App Service plan. | KubeEnvironmentProfile |
// | maximumElasticWorkerCount | Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan | int |
// | perSiteScaling | Iftrue, apps assigned to this App Service plan can be scaled independently.Iffalse, apps assigned to this App Service plan will scale to all instances of the plan. | bool |
// | reserved | If Linux app service plantrue,falseotherwise. | bool |
// | spotExpirationTime | The time when the server farm expires. Valid only if it is a spot server farm. | string |
// | targetWorkerCount | Scaling worker count. | int |
// | targetWorkerSizeId | Scaling worker size ID. | int |
// | workerTierName | Target worker tier assigned to the App Service plan. | string |
// | zoneRedundant | Iftrue, this App Service Plan will perform availability zone balancing.Iffalse, this App Service Plan will not perform availability zone balancing. | bool |

// | Name | Description | Value |
// |-|-|-|
// | id | Resource ID of the App Service Environment. | string |

// | Name | Description | Value |
// |-|-|-|
// | id | Resource ID of the Kubernetes Environment. | string |

// | Name | Description | Value |
// |-|-|-|
// | capabilities | Capabilities of the SKU, e.g., is traffic manager enabled? | Capability[] |
// | capacity | Current number of instances assigned to the resource. | int |
// | family | Family code of the resource SKU. | string |
// | locations | Locations of the SKU. | string[] |
// | name | Name of the resource SKU. | string |
// | size | Size specifier of the resource SKU. | string |
// | skuCapacity | Min, max, and default scale values of the SKU. | SkuCapacity |
// | tier | Service tier of the resource SKU. | string |

// | Name | Description | Value |
// |-|-|-|
// | name | Name of the SKU capability. | string |
// | reason | Reason of the SKU capability. | string |
// | value | Value of the SKU capability. | string |

// | Name | Description | Value |
// |-|-|-|
// | default | Default number of workers for this App Service plan SKU. | int |
// | elasticMaximum | Maximum number of Elastic workers for this App Service plan SKU. | int |
// | maximum | Maximum number of workers for this App Service plan SKU. | int |
// | minimum | Minimum number of workers for this App Service plan SKU. | int |
// | scaleType | Available scale configurations for an App Service plan. | string |
