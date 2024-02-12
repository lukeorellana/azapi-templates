import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringBuildservicesBuildersProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringBuildservicesBuilders resource
 */
export class AppplatformSpringBuildservicesBuilders extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringBuildservicesBuildersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/buildServices/builders@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringBuildservicesBuildersProps): string {
    return JSON.stringify(
        {properties: {buildpackGroups: [{buildpacks: [{id: "string"}], name: "string"}], stack: {id: "string", version: "string"}}}
    );
  }
}
