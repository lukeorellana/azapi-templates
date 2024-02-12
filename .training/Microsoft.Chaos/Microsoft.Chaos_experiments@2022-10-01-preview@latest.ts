import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ChaosExperimentsProps extends IAzAPIBaseProps {

}

/**
 * ChaosExperiments resource
 */
export class ChaosExperiments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ChaosExperimentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Chaos/experiments@2022-10-01-preview";
  }

  protected getResourceBody(props: ChaosExperimentsProps): string {
    return JSON.stringify(
        {properties: {selectors: [{filter: {type: "string"}, id: "string", targets: [{id: "string", type: "ChaosTarget"}], type: "string"}], startOnCreation: "${bool}", steps: [{branches: [{actions: [{name: "string", type: "string"}], name: "string"}], name: "string"}]}}
    );
  }
}
