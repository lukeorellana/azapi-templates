import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningWebservicesProps extends IAzAPIBaseProps {

}

/**
 * MachinelearningWebservices resource
 */
export class MachinelearningWebservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MachinelearningWebservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MachineLearning/webServices@2017-01-01";
  }

  protected getResourceBody(props: MachinelearningWebservicesProps): string {
    return JSON.stringify(
        {properties: {assets: {}, commitmentPlan: {id: "string"}, description: "string", diagnostics: {expiry: "string", level: "string"}, exampleRequest: {globalParameters: {}, inputs: {}}, exposeSampleData: "${bool}", input: {description: "string", properties: {}, title: "string", type: "string"}, keys: {primary: "string", secondary: "string"}, machineLearningWorkspace: {id: "string"}, output: {description: "string", properties: {}, title: "string", type: "string"}, parameters: {}, payloadsInBlobStorage: "${bool}", payloadsLocation: {credentials: "string", uri: "string"}, readOnly: "${bool}", realtimeConfiguration: {maxConcurrentCalls: "${int}"}, storageAccount: {key: "string", name: "string"}, title: "string", packageType: "string"}}
    );
  }
}
