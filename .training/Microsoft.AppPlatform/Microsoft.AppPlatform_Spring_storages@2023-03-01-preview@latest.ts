import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringStoragesProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringStorages resource
 */
export class AppplatformSpringStorages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringStoragesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/storages@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringStoragesProps): string {
    return JSON.stringify(
        {properties: {storageType: "string"}}
    );
  }
}
