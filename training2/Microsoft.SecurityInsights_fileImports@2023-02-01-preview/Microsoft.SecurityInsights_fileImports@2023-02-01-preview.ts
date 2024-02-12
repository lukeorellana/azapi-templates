import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsFileimportsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The content type of this file.
   */
readonly contentType: 'BasicIndicator''StixIndicator''Unspecified';

/**
   * Represents the imported file.
   */
readonly importFile: FileMetadata;

/**
   * Describes how to ingest the records in the file.
   */
readonly ingestionMode: 'IngestAnyValidRecords''IngestOnlyIfAllAreValid''Unspecified';

/**
   * The source for the data in the file.
   */
readonly source: string;

/**
   * The format of the file
   */
readonly fileFormat?: 'CSV''JSON''Unspecified';

/**
   * The name of the file.
   */
readonly fileName?: string;

/**
   * The size of the file.
   */
readonly fileSize?: number;
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
