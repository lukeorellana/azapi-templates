import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsCertificatesProps extends IAzAPIBaseProps {

}

/**
 * LogicIntegrationaccountsCertificates resource
 */
export class LogicIntegrationaccountsCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/certificates@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsCertificatesProps): string {
    return JSON.stringify(
        {properties: {key: {keyName: "string", keyVault: {id: "string"}, keyVersion: "string"}, publicCertificate: "string"}}
    );
  }
}
