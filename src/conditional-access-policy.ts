// https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConditionalAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#display_name ConditionalAccessPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#state ConditionalAccessPolicy#state}
  */
  readonly state: string;
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#conditions ConditionalAccessPolicy#conditions}
  */
  readonly conditions: ConditionalAccessPolicyConditions;
  /**
  * grant_controls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#grant_controls ConditionalAccessPolicy#grant_controls}
  */
  readonly grantControls: ConditionalAccessPolicyGrantControls;
  /**
  * session_controls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#session_controls ConditionalAccessPolicy#session_controls}
  */
  readonly sessionControls?: ConditionalAccessPolicySessionControls;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#timeouts ConditionalAccessPolicy#timeouts}
  */
  readonly timeouts?: ConditionalAccessPolicyTimeouts;
}
export interface ConditionalAccessPolicyConditionsApplications {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_applications ConditionalAccessPolicy#excluded_applications}
  */
  readonly excludedApplications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_applications ConditionalAccessPolicy#included_applications}
  */
  readonly includedApplications: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_user_actions ConditionalAccessPolicy#included_user_actions}
  */
  readonly includedUserActions?: string[];
}

function conditionalAccessPolicyConditionsApplicationsToTerraform(struct?: ConditionalAccessPolicyConditionsApplicationsOutputReference | ConditionalAccessPolicyConditionsApplications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_applications: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedApplications),
    included_applications: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedApplications),
    included_user_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedUserActions),
  }
}

export class ConditionalAccessPolicyConditionsApplicationsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // excluded_applications - computed: false, optional: true, required: false
  private _excludedApplications?: string[] | undefined; 
  public get excludedApplications() {
    return this.getListAttribute('excluded_applications');
  }
  public set excludedApplications(value: string[] | undefined) {
    this._excludedApplications = value;
  }
  public resetExcludedApplications() {
    this._excludedApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedApplicationsInput() {
    return this._excludedApplications
  }

  // included_applications - computed: false, optional: false, required: true
  private _includedApplications?: string[]; 
  public get includedApplications() {
    return this.getListAttribute('included_applications');
  }
  public set includedApplications(value: string[]) {
    this._includedApplications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includedApplicationsInput() {
    return this._includedApplications
  }

  // included_user_actions - computed: false, optional: true, required: false
  private _includedUserActions?: string[] | undefined; 
  public get includedUserActions() {
    return this.getListAttribute('included_user_actions');
  }
  public set includedUserActions(value: string[] | undefined) {
    this._includedUserActions = value;
  }
  public resetIncludedUserActions() {
    this._includedUserActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedUserActionsInput() {
    return this._includedUserActions
  }
}
export interface ConditionalAccessPolicyConditionsDevicesFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#mode ConditionalAccessPolicy#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#rule ConditionalAccessPolicy#rule}
  */
  readonly rule: string;
}

function conditionalAccessPolicyConditionsDevicesFilterToTerraform(struct?: ConditionalAccessPolicyConditionsDevicesFilterOutputReference | ConditionalAccessPolicyConditionsDevicesFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    rule: cdktf.stringToTerraform(struct!.rule),
  }
}

export class ConditionalAccessPolicyConditionsDevicesFilterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }
}
export interface ConditionalAccessPolicyConditionsDevices {
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#filter ConditionalAccessPolicy#filter}
  */
  readonly filter?: ConditionalAccessPolicyConditionsDevicesFilter;
}

function conditionalAccessPolicyConditionsDevicesToTerraform(struct?: ConditionalAccessPolicyConditionsDevicesOutputReference | ConditionalAccessPolicyConditionsDevices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: conditionalAccessPolicyConditionsDevicesFilterToTerraform(struct!.filter),
  }
}

export class ConditionalAccessPolicyConditionsDevicesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: ConditionalAccessPolicyConditionsDevicesFilter | undefined; 
  private __filterOutput = new ConditionalAccessPolicyConditionsDevicesFilterOutputReference(this as any, "filter", true);
  public get filter() {
    return this.__filterOutput;
  }
  public putFilter(value: ConditionalAccessPolicyConditionsDevicesFilter | undefined) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }
}
export interface ConditionalAccessPolicyConditionsLocations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_locations ConditionalAccessPolicy#excluded_locations}
  */
  readonly excludedLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_locations ConditionalAccessPolicy#included_locations}
  */
  readonly includedLocations: string[];
}

function conditionalAccessPolicyConditionsLocationsToTerraform(struct?: ConditionalAccessPolicyConditionsLocationsOutputReference | ConditionalAccessPolicyConditionsLocations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_locations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedLocations),
    included_locations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedLocations),
  }
}

export class ConditionalAccessPolicyConditionsLocationsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // excluded_locations - computed: false, optional: true, required: false
  private _excludedLocations?: string[] | undefined; 
  public get excludedLocations() {
    return this.getListAttribute('excluded_locations');
  }
  public set excludedLocations(value: string[] | undefined) {
    this._excludedLocations = value;
  }
  public resetExcludedLocations() {
    this._excludedLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedLocationsInput() {
    return this._excludedLocations
  }

  // included_locations - computed: false, optional: false, required: true
  private _includedLocations?: string[]; 
  public get includedLocations() {
    return this.getListAttribute('included_locations');
  }
  public set includedLocations(value: string[]) {
    this._includedLocations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includedLocationsInput() {
    return this._includedLocations
  }
}
export interface ConditionalAccessPolicyConditionsPlatforms {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_platforms ConditionalAccessPolicy#excluded_platforms}
  */
  readonly excludedPlatforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_platforms ConditionalAccessPolicy#included_platforms}
  */
  readonly includedPlatforms: string[];
}

function conditionalAccessPolicyConditionsPlatformsToTerraform(struct?: ConditionalAccessPolicyConditionsPlatformsOutputReference | ConditionalAccessPolicyConditionsPlatforms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_platforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedPlatforms),
    included_platforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedPlatforms),
  }
}

export class ConditionalAccessPolicyConditionsPlatformsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // excluded_platforms - computed: false, optional: true, required: false
  private _excludedPlatforms?: string[] | undefined; 
  public get excludedPlatforms() {
    return this.getListAttribute('excluded_platforms');
  }
  public set excludedPlatforms(value: string[] | undefined) {
    this._excludedPlatforms = value;
  }
  public resetExcludedPlatforms() {
    this._excludedPlatforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPlatformsInput() {
    return this._excludedPlatforms
  }

  // included_platforms - computed: false, optional: false, required: true
  private _includedPlatforms?: string[]; 
  public get includedPlatforms() {
    return this.getListAttribute('included_platforms');
  }
  public set includedPlatforms(value: string[]) {
    this._includedPlatforms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPlatformsInput() {
    return this._includedPlatforms
  }
}
export interface ConditionalAccessPolicyConditionsUsers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_groups ConditionalAccessPolicy#excluded_groups}
  */
  readonly excludedGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_roles ConditionalAccessPolicy#excluded_roles}
  */
  readonly excludedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_users ConditionalAccessPolicy#excluded_users}
  */
  readonly excludedUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_groups ConditionalAccessPolicy#included_groups}
  */
  readonly includedGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_roles ConditionalAccessPolicy#included_roles}
  */
  readonly includedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_users ConditionalAccessPolicy#included_users}
  */
  readonly includedUsers?: string[];
}

function conditionalAccessPolicyConditionsUsersToTerraform(struct?: ConditionalAccessPolicyConditionsUsersOutputReference | ConditionalAccessPolicyConditionsUsers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedGroups),
    excluded_roles: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedRoles),
    excluded_users: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedUsers),
    included_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedGroups),
    included_roles: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedRoles),
    included_users: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedUsers),
  }
}

export class ConditionalAccessPolicyConditionsUsersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // excluded_groups - computed: false, optional: true, required: false
  private _excludedGroups?: string[] | undefined; 
  public get excludedGroups() {
    return this.getListAttribute('excluded_groups');
  }
  public set excludedGroups(value: string[] | undefined) {
    this._excludedGroups = value;
  }
  public resetExcludedGroups() {
    this._excludedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedGroupsInput() {
    return this._excludedGroups
  }

  // excluded_roles - computed: false, optional: true, required: false
  private _excludedRoles?: string[] | undefined; 
  public get excludedRoles() {
    return this.getListAttribute('excluded_roles');
  }
  public set excludedRoles(value: string[] | undefined) {
    this._excludedRoles = value;
  }
  public resetExcludedRoles() {
    this._excludedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedRolesInput() {
    return this._excludedRoles
  }

  // excluded_users - computed: false, optional: true, required: false
  private _excludedUsers?: string[] | undefined; 
  public get excludedUsers() {
    return this.getListAttribute('excluded_users');
  }
  public set excludedUsers(value: string[] | undefined) {
    this._excludedUsers = value;
  }
  public resetExcludedUsers() {
    this._excludedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedUsersInput() {
    return this._excludedUsers
  }

  // included_groups - computed: false, optional: true, required: false
  private _includedGroups?: string[] | undefined; 
  public get includedGroups() {
    return this.getListAttribute('included_groups');
  }
  public set includedGroups(value: string[] | undefined) {
    this._includedGroups = value;
  }
  public resetIncludedGroups() {
    this._includedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedGroupsInput() {
    return this._includedGroups
  }

  // included_roles - computed: false, optional: true, required: false
  private _includedRoles?: string[] | undefined; 
  public get includedRoles() {
    return this.getListAttribute('included_roles');
  }
  public set includedRoles(value: string[] | undefined) {
    this._includedRoles = value;
  }
  public resetIncludedRoles() {
    this._includedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedRolesInput() {
    return this._includedRoles
  }

  // included_users - computed: false, optional: true, required: false
  private _includedUsers?: string[] | undefined; 
  public get includedUsers() {
    return this.getListAttribute('included_users');
  }
  public set includedUsers(value: string[] | undefined) {
    this._includedUsers = value;
  }
  public resetIncludedUsers() {
    this._includedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedUsersInput() {
    return this._includedUsers
  }
}
export interface ConditionalAccessPolicyConditions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#client_app_types ConditionalAccessPolicy#client_app_types}
  */
  readonly clientAppTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#sign_in_risk_levels ConditionalAccessPolicy#sign_in_risk_levels}
  */
  readonly signInRiskLevels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#user_risk_levels ConditionalAccessPolicy#user_risk_levels}
  */
  readonly userRiskLevels?: string[];
  /**
  * applications block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#applications ConditionalAccessPolicy#applications}
  */
  readonly applications: ConditionalAccessPolicyConditionsApplications;
  /**
  * devices block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#devices ConditionalAccessPolicy#devices}
  */
  readonly devices?: ConditionalAccessPolicyConditionsDevices;
  /**
  * locations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#locations ConditionalAccessPolicy#locations}
  */
  readonly locations: ConditionalAccessPolicyConditionsLocations;
  /**
  * platforms block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#platforms ConditionalAccessPolicy#platforms}
  */
  readonly platforms: ConditionalAccessPolicyConditionsPlatforms;
  /**
  * users block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#users ConditionalAccessPolicy#users}
  */
  readonly users: ConditionalAccessPolicyConditionsUsers;
}

function conditionalAccessPolicyConditionsToTerraform(struct?: ConditionalAccessPolicyConditionsOutputReference | ConditionalAccessPolicyConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_app_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.clientAppTypes),
    sign_in_risk_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.signInRiskLevels),
    user_risk_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.userRiskLevels),
    applications: conditionalAccessPolicyConditionsApplicationsToTerraform(struct!.applications),
    devices: conditionalAccessPolicyConditionsDevicesToTerraform(struct!.devices),
    locations: conditionalAccessPolicyConditionsLocationsToTerraform(struct!.locations),
    platforms: conditionalAccessPolicyConditionsPlatformsToTerraform(struct!.platforms),
    users: conditionalAccessPolicyConditionsUsersToTerraform(struct!.users),
  }
}

export class ConditionalAccessPolicyConditionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // client_app_types - computed: false, optional: false, required: true
  private _clientAppTypes?: string[]; 
  public get clientAppTypes() {
    return this.getListAttribute('client_app_types');
  }
  public set clientAppTypes(value: string[]) {
    this._clientAppTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAppTypesInput() {
    return this._clientAppTypes
  }

  // sign_in_risk_levels - computed: false, optional: true, required: false
  private _signInRiskLevels?: string[] | undefined; 
  public get signInRiskLevels() {
    return this.getListAttribute('sign_in_risk_levels');
  }
  public set signInRiskLevels(value: string[] | undefined) {
    this._signInRiskLevels = value;
  }
  public resetSignInRiskLevels() {
    this._signInRiskLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInRiskLevelsInput() {
    return this._signInRiskLevels
  }

  // user_risk_levels - computed: false, optional: true, required: false
  private _userRiskLevels?: string[] | undefined; 
  public get userRiskLevels() {
    return this.getListAttribute('user_risk_levels');
  }
  public set userRiskLevels(value: string[] | undefined) {
    this._userRiskLevels = value;
  }
  public resetUserRiskLevels() {
    this._userRiskLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRiskLevelsInput() {
    return this._userRiskLevels
  }

  // applications - computed: false, optional: false, required: true
  private _applications?: ConditionalAccessPolicyConditionsApplications; 
  private __applicationsOutput = new ConditionalAccessPolicyConditionsApplicationsOutputReference(this as any, "applications", true);
  public get applications() {
    return this.__applicationsOutput;
  }
  public putApplications(value: ConditionalAccessPolicyConditionsApplications) {
    this._applications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications
  }

  // devices - computed: false, optional: true, required: false
  private _devices?: ConditionalAccessPolicyConditionsDevices | undefined; 
  private __devicesOutput = new ConditionalAccessPolicyConditionsDevicesOutputReference(this as any, "devices", true);
  public get devices() {
    return this.__devicesOutput;
  }
  public putDevices(value: ConditionalAccessPolicyConditionsDevices | undefined) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices
  }

  // locations - computed: false, optional: false, required: true
  private _locations?: ConditionalAccessPolicyConditionsLocations; 
  private __locationsOutput = new ConditionalAccessPolicyConditionsLocationsOutputReference(this as any, "locations", true);
  public get locations() {
    return this.__locationsOutput;
  }
  public putLocations(value: ConditionalAccessPolicyConditionsLocations) {
    this._locations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations
  }

  // platforms - computed: false, optional: false, required: true
  private _platforms?: ConditionalAccessPolicyConditionsPlatforms; 
  private __platformsOutput = new ConditionalAccessPolicyConditionsPlatformsOutputReference(this as any, "platforms", true);
  public get platforms() {
    return this.__platformsOutput;
  }
  public putPlatforms(value: ConditionalAccessPolicyConditionsPlatforms) {
    this._platforms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformsInput() {
    return this._platforms
  }

  // users - computed: false, optional: false, required: true
  private _users?: ConditionalAccessPolicyConditionsUsers; 
  private __usersOutput = new ConditionalAccessPolicyConditionsUsersOutputReference(this as any, "users", true);
  public get users() {
    return this.__usersOutput;
  }
  public putUsers(value: ConditionalAccessPolicyConditionsUsers) {
    this._users = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users
  }
}
export interface ConditionalAccessPolicyGrantControls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#built_in_controls ConditionalAccessPolicy#built_in_controls}
  */
  readonly builtInControls: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#custom_authentication_factors ConditionalAccessPolicy#custom_authentication_factors}
  */
  readonly customAuthenticationFactors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#operator ConditionalAccessPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#terms_of_use ConditionalAccessPolicy#terms_of_use}
  */
  readonly termsOfUse?: string[];
}

function conditionalAccessPolicyGrantControlsToTerraform(struct?: ConditionalAccessPolicyGrantControlsOutputReference | ConditionalAccessPolicyGrantControls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    built_in_controls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.builtInControls),
    custom_authentication_factors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.customAuthenticationFactors),
    operator: cdktf.stringToTerraform(struct!.operator),
    terms_of_use: cdktf.listMapper(cdktf.stringToTerraform)(struct!.termsOfUse),
  }
}

export class ConditionalAccessPolicyGrantControlsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // built_in_controls - computed: false, optional: false, required: true
  private _builtInControls?: string[]; 
  public get builtInControls() {
    return this.getListAttribute('built_in_controls');
  }
  public set builtInControls(value: string[]) {
    this._builtInControls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInControlsInput() {
    return this._builtInControls
  }

  // custom_authentication_factors - computed: false, optional: true, required: false
  private _customAuthenticationFactors?: string[] | undefined; 
  public get customAuthenticationFactors() {
    return this.getListAttribute('custom_authentication_factors');
  }
  public set customAuthenticationFactors(value: string[] | undefined) {
    this._customAuthenticationFactors = value;
  }
  public resetCustomAuthenticationFactors() {
    this._customAuthenticationFactors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAuthenticationFactorsInput() {
    return this._customAuthenticationFactors
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator
  }

  // terms_of_use - computed: false, optional: true, required: false
  private _termsOfUse?: string[] | undefined; 
  public get termsOfUse() {
    return this.getListAttribute('terms_of_use');
  }
  public set termsOfUse(value: string[] | undefined) {
    this._termsOfUse = value;
  }
  public resetTermsOfUse() {
    this._termsOfUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsOfUseInput() {
    return this._termsOfUse
  }
}
export interface ConditionalAccessPolicySessionControls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#application_enforced_restrictions_enabled ConditionalAccessPolicy#application_enforced_restrictions_enabled}
  */
  readonly applicationEnforcedRestrictionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#cloud_app_security_policy ConditionalAccessPolicy#cloud_app_security_policy}
  */
  readonly cloudAppSecurityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#sign_in_frequency ConditionalAccessPolicy#sign_in_frequency}
  */
  readonly signInFrequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#sign_in_frequency_period ConditionalAccessPolicy#sign_in_frequency_period}
  */
  readonly signInFrequencyPeriod?: string;
}

function conditionalAccessPolicySessionControlsToTerraform(struct?: ConditionalAccessPolicySessionControlsOutputReference | ConditionalAccessPolicySessionControls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_enforced_restrictions_enabled: cdktf.booleanToTerraform(struct!.applicationEnforcedRestrictionsEnabled),
    cloud_app_security_policy: cdktf.stringToTerraform(struct!.cloudAppSecurityPolicy),
    sign_in_frequency: cdktf.numberToTerraform(struct!.signInFrequency),
    sign_in_frequency_period: cdktf.stringToTerraform(struct!.signInFrequencyPeriod),
  }
}

export class ConditionalAccessPolicySessionControlsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // application_enforced_restrictions_enabled - computed: false, optional: true, required: false
  private _applicationEnforcedRestrictionsEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get applicationEnforcedRestrictionsEnabled() {
    return this.getBooleanAttribute('application_enforced_restrictions_enabled') as any;
  }
  public set applicationEnforcedRestrictionsEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._applicationEnforcedRestrictionsEnabled = value;
  }
  public resetApplicationEnforcedRestrictionsEnabled() {
    this._applicationEnforcedRestrictionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEnforcedRestrictionsEnabledInput() {
    return this._applicationEnforcedRestrictionsEnabled
  }

  // cloud_app_security_policy - computed: false, optional: true, required: false
  private _cloudAppSecurityPolicy?: string | undefined; 
  public get cloudAppSecurityPolicy() {
    return this.getStringAttribute('cloud_app_security_policy');
  }
  public set cloudAppSecurityPolicy(value: string | undefined) {
    this._cloudAppSecurityPolicy = value;
  }
  public resetCloudAppSecurityPolicy() {
    this._cloudAppSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAppSecurityPolicyInput() {
    return this._cloudAppSecurityPolicy
  }

  // sign_in_frequency - computed: false, optional: true, required: false
  private _signInFrequency?: number | undefined; 
  public get signInFrequency() {
    return this.getNumberAttribute('sign_in_frequency');
  }
  public set signInFrequency(value: number | undefined) {
    this._signInFrequency = value;
  }
  public resetSignInFrequency() {
    this._signInFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInFrequencyInput() {
    return this._signInFrequency
  }

  // sign_in_frequency_period - computed: false, optional: true, required: false
  private _signInFrequencyPeriod?: string | undefined; 
  public get signInFrequencyPeriod() {
    return this.getStringAttribute('sign_in_frequency_period');
  }
  public set signInFrequencyPeriod(value: string | undefined) {
    this._signInFrequencyPeriod = value;
  }
  public resetSignInFrequencyPeriod() {
    this._signInFrequencyPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInFrequencyPeriodInput() {
    return this._signInFrequencyPeriod
  }
}
export interface ConditionalAccessPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#create ConditionalAccessPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#delete ConditionalAccessPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#read ConditionalAccessPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#update ConditionalAccessPolicy#update}
  */
  readonly update?: string;
}

function conditionalAccessPolicyTimeoutsToTerraform(struct?: ConditionalAccessPolicyTimeoutsOutputReference | ConditionalAccessPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ConditionalAccessPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html azuread_conditional_access_policy}
*/
export class ConditionalAccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_conditional_access_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html azuread_conditional_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConditionalAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ConditionalAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_conditional_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._state = config.state;
    this._conditions = config.conditions;
    this._grantControls = config.grantControls;
    this._sessionControls = config.sessionControls;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions?: ConditionalAccessPolicyConditions; 
  private __conditionsOutput = new ConditionalAccessPolicyConditionsOutputReference(this as any, "conditions", true);
  public get conditions() {
    return this.__conditionsOutput;
  }
  public putConditions(value: ConditionalAccessPolicyConditions) {
    this._conditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions
  }

  // grant_controls - computed: false, optional: false, required: true
  private _grantControls?: ConditionalAccessPolicyGrantControls; 
  private __grantControlsOutput = new ConditionalAccessPolicyGrantControlsOutputReference(this as any, "grant_controls", true);
  public get grantControls() {
    return this.__grantControlsOutput;
  }
  public putGrantControls(value: ConditionalAccessPolicyGrantControls) {
    this._grantControls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantControlsInput() {
    return this._grantControls
  }

  // session_controls - computed: false, optional: true, required: false
  private _sessionControls?: ConditionalAccessPolicySessionControls | undefined; 
  private __sessionControlsOutput = new ConditionalAccessPolicySessionControlsOutputReference(this as any, "session_controls", true);
  public get sessionControls() {
    return this.__sessionControlsOutput;
  }
  public putSessionControls(value: ConditionalAccessPolicySessionControls | undefined) {
    this._sessionControls = value;
  }
  public resetSessionControls() {
    this._sessionControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionControlsInput() {
    return this._sessionControls
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ConditionalAccessPolicyTimeouts | undefined; 
  private __timeoutsOutput = new ConditionalAccessPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ConditionalAccessPolicyTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      state: cdktf.stringToTerraform(this._state),
      conditions: conditionalAccessPolicyConditionsToTerraform(this._conditions),
      grant_controls: conditionalAccessPolicyGrantControlsToTerraform(this._grantControls),
      session_controls: conditionalAccessPolicySessionControlsToTerraform(this._sessionControls),
      timeouts: conditionalAccessPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
