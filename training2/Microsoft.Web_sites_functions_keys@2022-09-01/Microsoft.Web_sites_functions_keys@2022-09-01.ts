import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesFunctionsKeysProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:functions;

/**
   * Key value
   */
readonly value?: string;
}

/**
 * WebSitesFunctionsKeys resource
 */
export class WebSitesFunctionsKeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesFunctionsKeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/functions/keys@2022-09-01";
  }

  protected getResourceBody(props: WebSitesFunctionsKeysProps): string {
    return JSON.stringify(
        {value: "string"}
    );
  }
}
