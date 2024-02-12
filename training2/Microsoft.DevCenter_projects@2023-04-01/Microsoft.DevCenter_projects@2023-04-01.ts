import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterProjectsProps extends IAzAPIBaseProps {
/**
   * Description of the project.
   */
readonly description?: string;

/**
   * Resource Id of an associated DevCenter
   */
readonly devCenterId?: string;

/**
   * When specified, limits the maximum number of Dev Boxes a single user can create across all pools in the project. This will have no effect on existing Dev Boxes when reduced.
   */
readonly maxDevBoxesPerUser?: number;
}

/**
 * DevcenterProjects resource
 */
export class DevcenterProjects extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevcenterProjectsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevCenter/projects@2023-04-01";
  }

  protected getResourceBody(props: DevcenterProjectsProps): string {
    return JSON.stringify(
        {properties: {description: "string", devCenterId: "string", maxDevBoxesPerUser: "${int}"}}
    );
  }
}
