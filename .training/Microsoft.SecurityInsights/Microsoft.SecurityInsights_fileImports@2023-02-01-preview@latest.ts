import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsFileimportsProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsFileimports resource
 */
export class SecurityinsightsFileimports extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsFileimportsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/fileImports@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsFileimportsProps): string {
    return JSON.stringify(
        {properties: {contentType: "string", importFile: {fileFormat: "string", fileName: "string", fileSize: "${int}"}, ingestionMode: "string", source: "string"}}
    );
  }
}
