import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppManagedenvironmentsDaprcomponentsProps extends IAzAPIBaseProps {

}

/**
 * AppManagedenvironmentsDaprcomponents resource
 */
export class AppManagedenvironmentsDaprcomponents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppManagedenvironmentsDaprcomponentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/managedEnvironments/daprComponents@2023-05-01";
  }

  protected getResourceBody(props: AppManagedenvironmentsDaprcomponentsProps): string {
    return JSON.stringify(
        {properties: {componentType: "string", ignoreErrors: "${bool}", initTimeout: "string", metadata: [{name: "string", secretRef: "string", value: "string"}], scopes: ["string"], secrets: [{identity: "string", keyVaultUrl: "string", name: "string", value: "string"}], secretStoreComponent: "string", version: "string"}}
    );
  }
}
