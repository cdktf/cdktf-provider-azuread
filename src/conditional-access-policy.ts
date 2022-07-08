// https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConditionalAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#display_name ConditionalAccessPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#id ConditionalAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#state ConditionalAccessPolicy#state}
  */
  readonly state: string;
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#conditions ConditionalAccessPolicy#conditions}
  */
  readonly conditions: ConditionalAccessPolicyConditions;
  /**
  * grant_controls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#grant_controls ConditionalAccessPolicy#grant_controls}
  */
  readonly grantControls: ConditionalAccessPolicyGrantControls;
  /**
  * session_controls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#session_controls ConditionalAccessPolicy#session_controls}
  */
  readonly sessionControls?: ConditionalAccessPolicySessionControls;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#timeouts ConditionalAccessPolicy#timeouts}
  */
  readonly timeouts?: ConditionalAccessPolicyTimeouts;
}
export interface ConditionalAccessPolicyConditionsApplications {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_applications ConditionalAccessPolicy#excluded_applications}
  */
  readonly excludedApplications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_applications ConditionalAccessPolicy#included_applications}
  */
  readonly includedApplications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_user_actions ConditionalAccessPolicy#included_user_actions}
  */
  readonly includedUserActions?: string[];
}

export function conditionalAccessPolicyConditionsApplicationsToTerraform(struct?: ConditionalAccessPolicyConditionsApplicationsOutputReference | ConditionalAccessPolicyConditionsApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConditionalAccessPolicyConditionsApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedApplications !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedApplications = this._excludedApplications;
    }
    if (this._includedApplications !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedApplications = this._includedApplications;
    }
    if (this._includedUserActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedUserActions = this._includedUserActions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionalAccessPolicyConditionsApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedApplications = undefined;
      this._includedApplications = undefined;
      this._includedUserActions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedApplications = value.excludedApplications;
      this._includedApplications = value.includedApplications;
      this._includedUserActions = value.includedUserActions;
    }
  }

  // excluded_applications - computed: false, optional: true, required: false
  private _excludedApplications?: string[]; 
  public get excludedApplications() {
    return this.getListAttribute('excluded_applications');
  }
  public set excludedApplications(value: string[]) {
    this._excludedApplications = value;
  }
  public resetExcludedApplications() {
    this._excludedApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedApplicationsInput() {
    return this._excludedApplications;
  }

  // included_applications - computed: false, optional: true, required: false
  private _includedApplications?: string[]; 
  public get includedApplications() {
    return this.getListAttribute('included_applications');
  }
  public set includedApplications(value: string[]) {
    this._includedApplications = value;
  }
  public resetIncludedApplications() {
    this._includedApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedApplicationsInput() {
    return this._includedApplications;
  }

  // included_user_actions - computed: false, optional: true, required: false
  private _includedUserActions?: string[]; 
  public get includedUserActions() {
    return this.getListAttribute('included_user_actions');
  }
  public set includedUserActions(value: string[]) {
    this._includedUserActions = value;
  }
  public resetIncludedUserActions() {
    this._includedUserActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedUserActionsInput() {
    return this._includedUserActions;
  }
}
export interface ConditionalAccessPolicyConditionsDevicesFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#mode ConditionalAccessPolicy#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#rule ConditionalAccessPolicy#rule}
  */
  readonly rule: string;
}

export function conditionalAccessPolicyConditionsDevicesFilterToTerraform(struct?: ConditionalAccessPolicyConditionsDevicesFilterOutputReference | ConditionalAccessPolicyConditionsDevicesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    rule: cdktf.stringToTerraform(struct!.rule),
  }
}

export class ConditionalAccessPolicyConditionsDevicesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConditionalAccessPolicyConditionsDevicesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionalAccessPolicyConditionsDevicesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._rule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._rule = value.rule;
    }
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
    return this._mode;
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
    return this._rule;
  }
}
export interface ConditionalAccessPolicyConditionsDevices {
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#filter ConditionalAccessPolicy#filter}
  */
  readonly filter?: ConditionalAccessPolicyConditionsDevicesFilter;
}

export function conditionalAccessPolicyConditionsDevicesToTerraform(struct?: ConditionalAccessPolicyConditionsDevicesOutputReference | ConditionalAccessPolicyConditionsDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: conditionalAccessPolicyConditionsDevicesFilterToTerraform(struct!.filter),
  }
}

export class ConditionalAccessPolicyConditionsDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConditionalAccessPolicyConditionsDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionalAccessPolicyConditionsDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter.internalValue = value.filter;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new ConditionalAccessPolicyConditionsDevicesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ConditionalAccessPolicyConditionsDevicesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface ConditionalAccessPolicyConditionsLocations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_locations ConditionalAccessPolicy#excluded_locations}
  */
  readonly excludedLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_locations ConditionalAccessPolicy#included_locations}
  */
  readonly includedLocations: string[];
}

export function conditionalAccessPolicyConditionsLocationsToTerraform(struct?: ConditionalAccessPolicyConditionsLocationsOutputReference | ConditionalAccessPolicyConditionsLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_locations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedLocations),
    included_locations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedLocations),
  }
}

export class ConditionalAccessPolicyConditionsLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConditionalAccessPolicyConditionsLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedLocations = this._excludedLocations;
    }
    if (this._includedLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedLocations = this._includedLocations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionalAccessPolicyConditionsLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedLocations = undefined;
      this._includedLocations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedLocations = value.excludedLocations;
      this._includedLocations = value.includedLocations;
    }
  }

  // excluded_locations - computed: false, optional: true, required: false
  private _excludedLocations?: string[]; 
  public get excludedLocations() {
    return this.getListAttribute('excluded_locations');
  }
  public set excludedLocations(value: string[]) {
    this._excludedLocations = value;
  }
  public resetExcludedLocations() {
    this._excludedLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedLocationsInput() {
    return this._excludedLocations;
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
    return this._includedLocations;
  }
}
export interface ConditionalAccessPolicyConditionsPlatforms {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_platforms ConditionalAccessPolicy#excluded_platforms}
  */
  readonly excludedPlatforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_platforms ConditionalAccessPolicy#included_platforms}
  */
  readonly includedPlatforms: string[];
}

export function conditionalAccessPolicyConditionsPlatformsToTerraform(struct?: ConditionalAccessPolicyConditionsPlatformsOutputReference | ConditionalAccessPolicyConditionsPlatforms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_platforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedPlatforms),
    included_platforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedPlatforms),
  }
}

export class ConditionalAccessPolicyConditionsPlatformsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConditionalAccessPolicyConditionsPlatforms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedPlatforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPlatforms = this._excludedPlatforms;
    }
    if (this._includedPlatforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPlatforms = this._includedPlatforms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionalAccessPolicyConditionsPlatforms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedPlatforms = undefined;
      this._includedPlatforms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedPlatforms = value.excludedPlatforms;
      this._includedPlatforms = value.includedPlatforms;
    }
  }

  // excluded_platforms - computed: false, optional: true, required: false
  private _excludedPlatforms?: string[]; 
  public get excludedPlatforms() {
    return this.getListAttribute('excluded_platforms');
  }
  public set excludedPlatforms(value: string[]) {
    this._excludedPlatforms = value;
  }
  public resetExcludedPlatforms() {
    this._excludedPlatforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPlatformsInput() {
    return this._excludedPlatforms;
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
    return this._includedPlatforms;
  }
}
export interface ConditionalAccessPolicyConditionsUsers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_groups ConditionalAccessPolicy#excluded_groups}
  */
  readonly excludedGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_roles ConditionalAccessPolicy#excluded_roles}
  */
  readonly excludedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_users ConditionalAccessPolicy#excluded_users}
  */
  readonly excludedUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_groups ConditionalAccessPolicy#included_groups}
  */
  readonly includedGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_roles ConditionalAccessPolicy#included_roles}
  */
  readonly includedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_users ConditionalAccessPolicy#included_users}
  */
  readonly includedUsers?: string[];
}

export function conditionalAccessPolicyConditionsUsersToTerraform(struct?: ConditionalAccessPolicyConditionsUsersOutputReference | ConditionalAccessPolicyConditionsUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConditionalAccessPolicyConditionsUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedGroups = this._excludedGroups;
    }
    if (this._excludedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedRoles = this._excludedRoles;
    }
    if (this._excludedUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedUsers = this._excludedUsers;
    }
    if (this._includedGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedGroups = this._includedGroups;
    }
    if (this._includedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedRoles = this._includedRoles;
    }
    if (this._includedUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedUsers = this._includedUsers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionalAccessPolicyConditionsUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedGroups = undefined;
      this._excludedRoles = undefined;
      this._excludedUsers = undefined;
      this._includedGroups = undefined;
      this._includedRoles = undefined;
      this._includedUsers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedGroups = value.excludedGroups;
      this._excludedRoles = value.excludedRoles;
      this._excludedUsers = value.excludedUsers;
      this._includedGroups = value.includedGroups;
      this._includedRoles = value.includedRoles;
      this._includedUsers = value.includedUsers;
    }
  }

  // excluded_groups - computed: false, optional: true, required: false
  private _excludedGroups?: string[]; 
  public get excludedGroups() {
    return this.getListAttribute('excluded_groups');
  }
  public set excludedGroups(value: string[]) {
    this._excludedGroups = value;
  }
  public resetExcludedGroups() {
    this._excludedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedGroupsInput() {
    return this._excludedGroups;
  }

  // excluded_roles - computed: false, optional: true, required: false
  private _excludedRoles?: string[]; 
  public get excludedRoles() {
    return this.getListAttribute('excluded_roles');
  }
  public set excludedRoles(value: string[]) {
    this._excludedRoles = value;
  }
  public resetExcludedRoles() {
    this._excludedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedRolesInput() {
    return this._excludedRoles;
  }

  // excluded_users - computed: false, optional: true, required: false
  private _excludedUsers?: string[]; 
  public get excludedUsers() {
    return this.getListAttribute('excluded_users');
  }
  public set excludedUsers(value: string[]) {
    this._excludedUsers = value;
  }
  public resetExcludedUsers() {
    this._excludedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedUsersInput() {
    return this._excludedUsers;
  }

  // included_groups - computed: false, optional: true, required: false
  private _includedGroups?: string[]; 
  public get includedGroups() {
    return this.getListAttribute('included_groups');
  }
  public set includedGroups(value: string[]) {
    this._includedGroups = value;
  }
  public resetIncludedGroups() {
    this._includedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedGroupsInput() {
    return this._includedGroups;
  }

  // included_roles - computed: false, optional: true, required: false
  private _includedRoles?: string[]; 
  public get includedRoles() {
    return this.getListAttribute('included_roles');
  }
  public set includedRoles(value: string[]) {
    this._includedRoles = value;
  }
  public resetIncludedRoles() {
    this._includedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedRolesInput() {
    return this._includedRoles;
  }

  // included_users - computed: false, optional: true, required: false
  private _includedUsers?: string[]; 
  public get includedUsers() {
    return this.getListAttribute('included_users');
  }
  public set includedUsers(value: string[]) {
    this._includedUsers = value;
  }
  public resetIncludedUsers() {
    this._includedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedUsersInput() {
    return this._includedUsers;
  }
}
export interface ConditionalAccessPolicyConditions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#client_app_types ConditionalAccessPolicy#client_app_types}
  */
  readonly clientAppTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#sign_in_risk_levels ConditionalAccessPolicy#sign_in_risk_levels}
  */
  readonly signInRiskLevels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#user_risk_levels ConditionalAccessPolicy#user_risk_levels}
  */
  readonly userRiskLevels?: string[];
  /**
  * applications block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#applications ConditionalAccessPolicy#applications}
  */
  readonly applications: ConditionalAccessPolicyConditionsApplications;
  /**
  * devices block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#devices ConditionalAccessPolicy#devices}
  */
  readonly devices?: ConditionalAccessPolicyConditionsDevices;
  /**
  * locations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#locations ConditionalAccessPolicy#locations}
  */
  readonly locations?: ConditionalAccessPolicyConditionsLocations;
  /**
  * platforms block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#platforms ConditionalAccessPolicy#platforms}
  */
  readonly platforms?: ConditionalAccessPolicyConditionsPlatforms;
  /**
  * users block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#users ConditionalAccessPolicy#users}
  */
  readonly users: ConditionalAccessPolicyConditionsUsers;
}

export function conditionalAccessPolicyConditionsToTerraform(struct?: ConditionalAccessPolicyConditionsOutputReference | ConditionalAccessPolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConditionalAccessPolicyConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAppTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAppTypes = this._clientAppTypes;
    }
    if (this._signInRiskLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.signInRiskLevels = this._signInRiskLevels;
    }
    if (this._userRiskLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRiskLevels = this._userRiskLevels;
    }
    if (this._applications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications?.internalValue;
    }
    if (this._devices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices?.internalValue;
    }
    if (this._locations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations?.internalValue;
    }
    if (this._platforms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platforms = this._platforms?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionalAccessPolicyConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientAppTypes = undefined;
      this._signInRiskLevels = undefined;
      this._userRiskLevels = undefined;
      this._applications.internalValue = undefined;
      this._devices.internalValue = undefined;
      this._locations.internalValue = undefined;
      this._platforms.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientAppTypes = value.clientAppTypes;
      this._signInRiskLevels = value.signInRiskLevels;
      this._userRiskLevels = value.userRiskLevels;
      this._applications.internalValue = value.applications;
      this._devices.internalValue = value.devices;
      this._locations.internalValue = value.locations;
      this._platforms.internalValue = value.platforms;
      this._users.internalValue = value.users;
    }
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
    return this._clientAppTypes;
  }

  // sign_in_risk_levels - computed: false, optional: true, required: false
  private _signInRiskLevels?: string[]; 
  public get signInRiskLevels() {
    return this.getListAttribute('sign_in_risk_levels');
  }
  public set signInRiskLevels(value: string[]) {
    this._signInRiskLevels = value;
  }
  public resetSignInRiskLevels() {
    this._signInRiskLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInRiskLevelsInput() {
    return this._signInRiskLevels;
  }

  // user_risk_levels - computed: false, optional: true, required: false
  private _userRiskLevels?: string[]; 
  public get userRiskLevels() {
    return this.getListAttribute('user_risk_levels');
  }
  public set userRiskLevels(value: string[]) {
    this._userRiskLevels = value;
  }
  public resetUserRiskLevels() {
    this._userRiskLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRiskLevelsInput() {
    return this._userRiskLevels;
  }

  // applications - computed: false, optional: false, required: true
  private _applications = new ConditionalAccessPolicyConditionsApplicationsOutputReference(this, "applications");
  public get applications() {
    return this._applications;
  }
  public putApplications(value: ConditionalAccessPolicyConditionsApplications) {
    this._applications.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications.internalValue;
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new ConditionalAccessPolicyConditionsDevicesOutputReference(this, "devices");
  public get devices() {
    return this._devices;
  }
  public putDevices(value: ConditionalAccessPolicyConditionsDevices) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // locations - computed: false, optional: true, required: false
  private _locations = new ConditionalAccessPolicyConditionsLocationsOutputReference(this, "locations");
  public get locations() {
    return this._locations;
  }
  public putLocations(value: ConditionalAccessPolicyConditionsLocations) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // platforms - computed: false, optional: true, required: false
  private _platforms = new ConditionalAccessPolicyConditionsPlatformsOutputReference(this, "platforms");
  public get platforms() {
    return this._platforms;
  }
  public putPlatforms(value: ConditionalAccessPolicyConditionsPlatforms) {
    this._platforms.internalValue = value;
  }
  public resetPlatforms() {
    this._platforms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformsInput() {
    return this._platforms.internalValue;
  }

  // users - computed: false, optional: false, required: true
  private _users = new ConditionalAccessPolicyConditionsUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: ConditionalAccessPolicyConditionsUsers) {
    this._users.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
export interface ConditionalAccessPolicyGrantControls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#built_in_controls ConditionalAccessPolicy#built_in_controls}
  */
  readonly builtInControls: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#custom_authentication_factors ConditionalAccessPolicy#custom_authentication_factors}
  */
  readonly customAuthenticationFactors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#operator ConditionalAccessPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#terms_of_use ConditionalAccessPolicy#terms_of_use}
  */
  readonly termsOfUse?: string[];
}

export function conditionalAccessPolicyGrantControlsToTerraform(struct?: ConditionalAccessPolicyGrantControlsOutputReference | ConditionalAccessPolicyGrantControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConditionalAccessPolicyGrantControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtInControls !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtInControls = this._builtInControls;
    }
    if (this._customAuthenticationFactors !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAuthenticationFactors = this._customAuthenticationFactors;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._termsOfUse !== undefined) {
      hasAnyValues = true;
      internalValueResult.termsOfUse = this._termsOfUse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionalAccessPolicyGrantControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._builtInControls = undefined;
      this._customAuthenticationFactors = undefined;
      this._operator = undefined;
      this._termsOfUse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._builtInControls = value.builtInControls;
      this._customAuthenticationFactors = value.customAuthenticationFactors;
      this._operator = value.operator;
      this._termsOfUse = value.termsOfUse;
    }
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
    return this._builtInControls;
  }

  // custom_authentication_factors - computed: false, optional: true, required: false
  private _customAuthenticationFactors?: string[]; 
  public get customAuthenticationFactors() {
    return this.getListAttribute('custom_authentication_factors');
  }
  public set customAuthenticationFactors(value: string[]) {
    this._customAuthenticationFactors = value;
  }
  public resetCustomAuthenticationFactors() {
    this._customAuthenticationFactors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAuthenticationFactorsInput() {
    return this._customAuthenticationFactors;
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
    return this._operator;
  }

  // terms_of_use - computed: false, optional: true, required: false
  private _termsOfUse?: string[]; 
  public get termsOfUse() {
    return this.getListAttribute('terms_of_use');
  }
  public set termsOfUse(value: string[]) {
    this._termsOfUse = value;
  }
  public resetTermsOfUse() {
    this._termsOfUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsOfUseInput() {
    return this._termsOfUse;
  }
}
export interface ConditionalAccessPolicySessionControls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#application_enforced_restrictions_enabled ConditionalAccessPolicy#application_enforced_restrictions_enabled}
  */
  readonly applicationEnforcedRestrictionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#cloud_app_security_policy ConditionalAccessPolicy#cloud_app_security_policy}
  */
  readonly cloudAppSecurityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#persistent_browser_mode ConditionalAccessPolicy#persistent_browser_mode}
  */
  readonly persistentBrowserMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#sign_in_frequency ConditionalAccessPolicy#sign_in_frequency}
  */
  readonly signInFrequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#sign_in_frequency_period ConditionalAccessPolicy#sign_in_frequency_period}
  */
  readonly signInFrequencyPeriod?: string;
}

export function conditionalAccessPolicySessionControlsToTerraform(struct?: ConditionalAccessPolicySessionControlsOutputReference | ConditionalAccessPolicySessionControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_enforced_restrictions_enabled: cdktf.booleanToTerraform(struct!.applicationEnforcedRestrictionsEnabled),
    cloud_app_security_policy: cdktf.stringToTerraform(struct!.cloudAppSecurityPolicy),
    persistent_browser_mode: cdktf.stringToTerraform(struct!.persistentBrowserMode),
    sign_in_frequency: cdktf.numberToTerraform(struct!.signInFrequency),
    sign_in_frequency_period: cdktf.stringToTerraform(struct!.signInFrequencyPeriod),
  }
}

export class ConditionalAccessPolicySessionControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConditionalAccessPolicySessionControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationEnforcedRestrictionsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationEnforcedRestrictionsEnabled = this._applicationEnforcedRestrictionsEnabled;
    }
    if (this._cloudAppSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAppSecurityPolicy = this._cloudAppSecurityPolicy;
    }
    if (this._persistentBrowserMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentBrowserMode = this._persistentBrowserMode;
    }
    if (this._signInFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.signInFrequency = this._signInFrequency;
    }
    if (this._signInFrequencyPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.signInFrequencyPeriod = this._signInFrequencyPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionalAccessPolicySessionControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationEnforcedRestrictionsEnabled = undefined;
      this._cloudAppSecurityPolicy = undefined;
      this._persistentBrowserMode = undefined;
      this._signInFrequency = undefined;
      this._signInFrequencyPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationEnforcedRestrictionsEnabled = value.applicationEnforcedRestrictionsEnabled;
      this._cloudAppSecurityPolicy = value.cloudAppSecurityPolicy;
      this._persistentBrowserMode = value.persistentBrowserMode;
      this._signInFrequency = value.signInFrequency;
      this._signInFrequencyPeriod = value.signInFrequencyPeriod;
    }
  }

  // application_enforced_restrictions_enabled - computed: false, optional: true, required: false
  private _applicationEnforcedRestrictionsEnabled?: boolean | cdktf.IResolvable; 
  public get applicationEnforcedRestrictionsEnabled() {
    return this.getBooleanAttribute('application_enforced_restrictions_enabled');
  }
  public set applicationEnforcedRestrictionsEnabled(value: boolean | cdktf.IResolvable) {
    this._applicationEnforcedRestrictionsEnabled = value;
  }
  public resetApplicationEnforcedRestrictionsEnabled() {
    this._applicationEnforcedRestrictionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEnforcedRestrictionsEnabledInput() {
    return this._applicationEnforcedRestrictionsEnabled;
  }

  // cloud_app_security_policy - computed: false, optional: true, required: false
  private _cloudAppSecurityPolicy?: string; 
  public get cloudAppSecurityPolicy() {
    return this.getStringAttribute('cloud_app_security_policy');
  }
  public set cloudAppSecurityPolicy(value: string) {
    this._cloudAppSecurityPolicy = value;
  }
  public resetCloudAppSecurityPolicy() {
    this._cloudAppSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAppSecurityPolicyInput() {
    return this._cloudAppSecurityPolicy;
  }

  // persistent_browser_mode - computed: false, optional: true, required: false
  private _persistentBrowserMode?: string; 
  public get persistentBrowserMode() {
    return this.getStringAttribute('persistent_browser_mode');
  }
  public set persistentBrowserMode(value: string) {
    this._persistentBrowserMode = value;
  }
  public resetPersistentBrowserMode() {
    this._persistentBrowserMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentBrowserModeInput() {
    return this._persistentBrowserMode;
  }

  // sign_in_frequency - computed: false, optional: true, required: false
  private _signInFrequency?: number; 
  public get signInFrequency() {
    return this.getNumberAttribute('sign_in_frequency');
  }
  public set signInFrequency(value: number) {
    this._signInFrequency = value;
  }
  public resetSignInFrequency() {
    this._signInFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInFrequencyInput() {
    return this._signInFrequency;
  }

  // sign_in_frequency_period - computed: false, optional: true, required: false
  private _signInFrequencyPeriod?: string; 
  public get signInFrequencyPeriod() {
    return this.getStringAttribute('sign_in_frequency_period');
  }
  public set signInFrequencyPeriod(value: string) {
    this._signInFrequencyPeriod = value;
  }
  public resetSignInFrequencyPeriod() {
    this._signInFrequencyPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInFrequencyPeriodInput() {
    return this._signInFrequencyPeriod;
  }
}
export interface ConditionalAccessPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#create ConditionalAccessPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#delete ConditionalAccessPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#read ConditionalAccessPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#update ConditionalAccessPolicy#update}
  */
  readonly update?: string;
}

export function conditionalAccessPolicyTimeoutsToTerraform(struct?: ConditionalAccessPolicyTimeoutsOutputReference | ConditionalAccessPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConditionalAccessPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionalAccessPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy azuread_conditional_access_policy}
*/
export class ConditionalAccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_conditional_access_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy azuread_conditional_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConditionalAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ConditionalAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_conditional_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.26.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._state = config.state;
    this._conditions.internalValue = config.conditions;
    this._grantControls.internalValue = config.grantControls;
    this._sessionControls.internalValue = config.sessionControls;
    this._timeouts.internalValue = config.timeouts;
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
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._state;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new ConditionalAccessPolicyConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ConditionalAccessPolicyConditions) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // grant_controls - computed: false, optional: false, required: true
  private _grantControls = new ConditionalAccessPolicyGrantControlsOutputReference(this, "grant_controls");
  public get grantControls() {
    return this._grantControls;
  }
  public putGrantControls(value: ConditionalAccessPolicyGrantControls) {
    this._grantControls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantControlsInput() {
    return this._grantControls.internalValue;
  }

  // session_controls - computed: false, optional: true, required: false
  private _sessionControls = new ConditionalAccessPolicySessionControlsOutputReference(this, "session_controls");
  public get sessionControls() {
    return this._sessionControls;
  }
  public putSessionControls(value: ConditionalAccessPolicySessionControls) {
    this._sessionControls.internalValue = value;
  }
  public resetSessionControls() {
    this._sessionControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionControlsInput() {
    return this._sessionControls.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConditionalAccessPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConditionalAccessPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      conditions: conditionalAccessPolicyConditionsToTerraform(this._conditions.internalValue),
      grant_controls: conditionalAccessPolicyGrantControlsToTerraform(this._grantControls.internalValue),
      session_controls: conditionalAccessPolicySessionControlsToTerraform(this._sessionControls.internalValue),
      timeouts: conditionalAccessPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
