import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsThreatintelligenceIndicatorsProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsThreatintelligenceIndicators resource
 */
export class SecurityinsightsThreatintelligenceIndicators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsThreatintelligenceIndicatorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/threatIntelligence/indicators@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsThreatintelligenceIndicatorsProps): string {
    return JSON.stringify(
        {properties: {confidence: "${int}", created: "string", createdByRef: "string", defanged: "${bool}", description: "string", displayName: "string", extensions: {}, externalId: "string", externalLastUpdatedTimeUtc: "string", externalReferences: [{description: "string", externalId: "string", hashes: {}, sourceName: "string", url: "string"}], granularMarkings: [{language: "string", markingRef: "${int}", selectors: ["string"]}], indicatorTypes: ["string"], killChainPhases: [{killChainName: "string", phaseName: "string"}], labels: ["string"], language: "string", lastUpdatedTimeUtc: "string", modified: "string", objectMarkingRefs: ["string"], parsedPattern: [{patternTypeKey: "string", patternTypeValues: [{value: "string", valueType: "string"}]}], pattern: "string", patternType: "string", patternVersion: "string", revoked: "${bool}", source: "string", threatIntelligenceTags: ["string"], threatTypes: ["string"], validFrom: "string", validUntil: "string"}, etag: "string"}
    );
  }
}
