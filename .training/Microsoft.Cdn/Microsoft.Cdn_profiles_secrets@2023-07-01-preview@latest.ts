import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesSecretsProps extends IAzAPIBaseProps {

}

/**
 * CdnProfilesSecrets resource
 */
export class CdnProfilesSecrets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesSecretsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/secrets@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesSecretsProps): string {
    return JSON.stringify(
        {properties: {parameters: {type: "string"}}}
    );
  }
}
