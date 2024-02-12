import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DatafactoryFactoriesDataflowsProps extends IAzAPIBaseProps {

}

export class DatafactoryFactoriesDataflows extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesDataflowsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/dataflows@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesDataflowsProps): string {
    return JSON.stringify(
      {properties: {annotations: ["${object}"], description: "string", folder: {name: "string"}, type: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Can't use:<>*#.%&:\\+?/or control charactersStart with alphanumeric. |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
// | properties | Data flow properties. | DataFlow(required) |

// | Name | Description | Value |
// |-|-|-|
// | annotations | List of tags that can be used for describing the data flow. | any[] |
// | description | The description of the data flow. | string |
// | folder | The folder that this data flow is in. If not specified, Data flow will appear at the root level. | DataFlowFolder |
// | type | Set the object type | FlowletMappingDataFlowWranglingDataFlow(required) |

// | Name | Description | Value |
// |-|-|-|
// | name | The name of the folder that this data flow is in. | string |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of data flow. | 'Flowlet' (required) |
// | typeProperties | Flowlet type properties. | FlowletTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | script | Flowlet script. | string |
// | scriptLines | Flowlet script lines. | string[] |
// | sinks | List of sinks in Flowlet. | DataFlowSink[] |
// | sources | List of sources in Flowlet. | DataFlowSource[] |
// | transformations | List of transformations in Flowlet. | Transformation[] |

// | Name | Description | Value |
// |-|-|-|
// | dataset | Dataset reference. | DatasetReference |
// | description | Transformation description. | string |
// | flowlet | Flowlet Reference | DataFlowReference |
// | linkedService | Linked service reference. | LinkedServiceReference |
// | name | Transformation name. | string (required) |
// | rejectedDataLinkedService | Rejected data linked service reference. | LinkedServiceReference |
// | schemaLinkedService | Schema linked service reference. | LinkedServiceReference |

// | Name | Description | Value |
// |-|-|-|
// | parameters | Arguments for dataset. | object |
// | referenceName | Reference dataset name. | string (required) |
// | type | Dataset reference type. | 'DatasetReference' (required) |

// | Name | Description | Value |
// |-|-|-|
// | datasetParameters | Reference data flow parameters from dataset. | For Bicep, you can use theany()function. |
// | parameters | Data flow parameters | object |
// | referenceName | Reference data flow name. | string (required) |
// | type | Data flow reference type. | 'DataFlowReference' (required) |

// | Name | Description | Value |
// |-|-|-|
// | parameters | Arguments for LinkedService. | object |
// | referenceName | Reference LinkedService name. | string (required) |
// | type | Linked service reference type. | 'LinkedServiceReference' (required) |

// | Name | Description | Value |
// |-|-|-|
// | dataset | Dataset reference. | DatasetReference |
// | description | Transformation description. | string |
// | flowlet | Flowlet Reference | DataFlowReference |
// | linkedService | Linked service reference. | LinkedServiceReference |
// | name | Transformation name. | string (required) |
// | schemaLinkedService | Schema linked service reference. | LinkedServiceReference |

// | Name | Description | Value |
// |-|-|-|
// | dataset | Dataset reference. | DatasetReference |
// | description | Transformation description. | string |
// | flowlet | Flowlet Reference | DataFlowReference |
// | linkedService | Linked service reference. | LinkedServiceReference |
// | name | Transformation name. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of data flow. | 'MappingDataFlow' (required) |
// | typeProperties | Mapping data flow type properties. | MappingDataFlowTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | script | DataFlow script. | string |
// | scriptLines | Data flow script lines. | string[] |
// | sinks | List of sinks in data flow. | DataFlowSink[] |
// | sources | List of sources in data flow. | DataFlowSource[] |
// | transformations | List of transformations in data flow. | Transformation[] |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of data flow. | 'WranglingDataFlow' (required) |
// | typeProperties | PowerQuery data flow type properties. | PowerQueryTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | documentLocale | Locale of the Power query mashup document. | string |
// | script | Power query mashup script. | string |
// | sources | List of sources in Power Query. | PowerQuerySource[] |

// | Name | Description | Value |
// |-|-|-|
// | dataset | Dataset reference. | DatasetReference |
// | description | Transformation description. | string |
// | flowlet | Flowlet Reference | DataFlowReference |
// | linkedService | Linked service reference. | LinkedServiceReference |
// | name | Transformation name. | string (required) |
// | schemaLinkedService | Schema linked service reference. | LinkedServiceReference |
// | script | source script. | string |
