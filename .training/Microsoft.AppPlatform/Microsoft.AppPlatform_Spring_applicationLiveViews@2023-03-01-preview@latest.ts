import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringApplicationliveviewsProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringApplicationliveviews resource
 */
export class AppplatformSpringApplicationliveviews extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringApplicationliveviewsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/applicationLiveViews@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringApplicationliveviewsProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}