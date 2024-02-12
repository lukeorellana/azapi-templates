import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DocumentdbDatabaseaccountsGremlindatabasesGraphsProps extends IAzAPIBaseProps {

}

export class DocumentdbDatabaseaccountsGremlindatabasesGraphs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsGremlindatabasesGraphsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsGremlindatabasesGraphsProps): string {
    return JSON.stringify(
      {properties: {options: {autoscaleSettings: {maxThroughput: int}, throughput: int}, resource: {analyticalStorageTtl: int, conflictResolutionPolicy: {conflictResolutionPath: "string", conflictResolutionProcedure: "string", mode: "string"}, defaultTtl: int, id: "string", indexingPolicy: {automatic: "${bool}", compositeIndexes: [{order: "string", path: "string"}], excludedPaths: [{path: "string"}], includedPaths: [{indexes: [{dataType: "string", kind: "string", precision: int}], path: "string"}], indexingMode: "string", spatialIndexes: [{path: "string", types: ["string"]}]}, partitionKey: {kind: "string", paths: ["string"], version: int}, uniqueKeyPolicy: {uniqueKeys: [{paths: ["string"]}]}}}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | location | The location of the resource group to which the resource belongs. | string |
// | tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:gremlinDatabases |
// | properties | Properties to create and update Azure Cosmos DB Gremlin graph. | GremlinGraphCreateUpdatePropertiesOrGremlinGraphGetP...(required) |

// | Name | Description | Value |
// |-|-|-|
// | options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | CreateUpdateOptionsOrGremlinGraphGetPropertiesOption... |
// | resource | The standard JSON format of a Gremlin graph | GremlinGraphResourceOrGremlinGraphGetPropertiesResou...(required) |

// | Name | Description | Value |
// |-|-|-|
// | autoscaleSettings | Specifies the Autoscale settings. | AutoscaleSettings |
// | throughput | Request Units per second. For example, "throughput": 10000. | int |

// | Name | Description | Value |
// |-|-|-|
// | maxThroughput | Represents maximum throughput, the resource can scale up to. | int |

// | Name | Description | Value |
// |-|-|-|
// | analyticalStorageTtl | Analytical TTL. | int |
// | conflictResolutionPolicy | The conflict resolution policy for the graph. | ConflictResolutionPolicy |
// | defaultTtl | Default time to live | int |
// | id | Name of the Cosmos DB Gremlin graph | string (required) |
// | indexingPolicy | The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the graph | IndexingPolicy |
// | partitionKey | The configuration of the partition key to be used for partitioning data into multiple partitions | ContainerPartitionKey |
// | uniqueKeyPolicy | The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service. | UniqueKeyPolicy |

// | Name | Description | Value |
// |-|-|-|
// | conflictResolutionPath | The conflict resolution path in the case of LastWriterWins mode. | string |
// | conflictResolutionProcedure | The procedure to resolve conflicts in the case of custom mode. | string |
// | mode | Indicates the conflict resolution mode. | 'Custom''LastWriterWins' |

// | Name | Description | Value |
// |-|-|-|
// | automatic | Indicates if the indexing policy is automatic | bool |
// | compositeIndexes | List of composite path list | CompositePath[] |
// | excludedPaths | List of paths to exclude from indexing | ExcludedPath[] |
// | includedPaths | List of paths to include in the indexing | IncludedPath[] |
// | indexingMode | Indicates the indexing mode. | 'consistent''lazy''none' |
// | spatialIndexes | List of spatial specifics | SpatialSpec[] |

// | Name | Description | Value |
// |-|-|-|
// | order | Sort order for composite paths. | 'ascending''descending' |
// | path | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | string |

// | Name | Description | Value |
// |-|-|-|
// | path | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | string |

// | Name | Description | Value |
// |-|-|-|
// | indexes | List of indexes for this path | Indexes[] |
// | path | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | string |

// | Name | Description | Value |
// |-|-|-|
// | dataType | The datatype for which the indexing behavior is applied to. | 'LineString''MultiPolygon''Number''Point''Polygon''String' |
// | kind | Indicates the type of index. | 'Hash''Range''Spatial' |
// | precision | The precision of the index. -1 is maximum precision. | int |

// | Name | Description | Value |
// |-|-|-|
// | path | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | string |
// | types | List of path's spatial type | String array containing any of:'LineString''MultiPolygon''Point''Polygon' |

// | Name | Description | Value |
// |-|-|-|
// | kind | Indicates the kind of algorithm used for partitioning. For MultiHash, multiple partition keys (upto three maximum) are supported for container create | 'Hash''MultiHash''Range' |
// | paths | List of paths using which data within the container can be partitioned | string[] |
// | version | Indicates the version of the partition key definition | int |

// | Name | Description | Value |
// |-|-|-|
// | uniqueKeys | List of unique keys on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service. | UniqueKey[] |

// | Name | Description | Value |
// |-|-|-|
// | paths | List of paths must be unique for each document in the Azure Cosmos DB service | string[] |
