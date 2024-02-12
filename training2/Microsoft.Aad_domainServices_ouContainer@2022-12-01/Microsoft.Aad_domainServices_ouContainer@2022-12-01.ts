import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AadDomainservicesOucontainerProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:domainServices;

/**
   * The account name
   */
readonly accountName?: string;

/**
   * The account password
   */
readonly password?: string;

/**
   * The account spn
   */
readonly spn?: string;
}

/**
 * AadDomainservicesOucontainer resource
 */
export class AadDomainservicesOucontainer extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AadDomainservicesOucontainerProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Aad/domainServices/ouContainer@2022-12-01";
  }

  protected getResourceBody(props: AadDomainservicesOucontainerProps): string {
    return JSON.stringify(
        {accountName: "string", password: "string", spn: "string"}
    );
  }
}
