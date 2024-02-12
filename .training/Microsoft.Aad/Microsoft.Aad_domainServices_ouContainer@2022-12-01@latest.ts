import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AadDomainservicesOucontainerProps extends IAzAPIBaseProps {

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
