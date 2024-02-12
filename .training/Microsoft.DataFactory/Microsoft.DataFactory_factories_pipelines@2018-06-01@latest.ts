import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesPipelinesProps extends IAzAPIBaseProps {

}

/**
 * DatafactoryFactoriesPipelines resource
 */
export class DatafactoryFactoriesPipelines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesPipelinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/pipelines@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesPipelinesProps): string {
    return JSON.stringify(
        {properties: {activities: [{dependsOn: [{activity: "string", dependencyConditions: ["string"]}], description: "string", name: "string", userProperties: [{name: "string"}], type: "string"}], annotations: ["${object}"], concurrency: "${int}", description: "string", folder: {name: "string"}, parameters: {}, policy: {elapsedTimeMetric: {}}, runDimensions: {}, variables: {}}}
    );
  }
}
