import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecuritySettingsProps extends IAzAPIBaseProps {

}

/**
 * SecuritySettings resource
 */
export class SecuritySettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecuritySettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/settings@2022-05-01";
  }

  protected getResourceBody(props: SecuritySettingsProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
