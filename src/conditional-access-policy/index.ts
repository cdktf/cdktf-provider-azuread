/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConditionalAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#display_name ConditionalAccessPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#id ConditionalAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#state ConditionalAccessPolicy#state}
  */
  readonly state: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#conditions ConditionalAccessPolicy#conditions}
  */
  readonly conditions: ConditionalAccessPolicyConditions;
  /**
  * grant_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#grant_controls ConditionalAccessPolicy#grant_controls}
  */
  readonly grantControls?: ConditionalAccessPolicyGrantControls;
  /**
  * session_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#session_controls ConditionalAccessPolicy#session_controls}
  */
  readonly sessionControls?: ConditionalAccessPolicySessionControls;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#timeouts ConditionalAccessPolicy#timeouts}
  */
  readonly timeouts?: ConditionalAccessPolicyTimeouts;
}
export interface ConditionalAccessPolicyConditionsApplications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#excluded_applications ConditionalAccessPolicy#excluded_applications}
  */
  readonly excludedApplications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#included_applications ConditionalAccessPolicy#included_applications}
  */
  readonly includedApplications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#included_user_actions ConditionalAccessPolicy#included_user_actions}
  */
  readonly includedUserActions?: string[];
}

export function conditionalAccessPolicyConditionsApplicationsToTerraform(struct?: ConditionalAccessPolicyConditionsApplicationsOutputReference | ConditionalAccessPolicyConditionsApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedApplications),
    included_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedApplications),
    included_user_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedUserActions),
  }
}


export function conditionalAccessPolicyConditionsApplicationsToHclTerraform(struct?: ConditionalAccessPolicyConditionsApplicationsOutputReference | ConditionalAccessPolicyConditionsApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedApplications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedApplications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_user_actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedUserActions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface ConditionalAccessPolicyConditionsClientApplications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#excluded_service_principals ConditionalAccessPolicy#excluded_service_principals}
  */
  readonly excludedServicePrincipals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#included_service_principals ConditionalAccessPolicy#included_service_principals}
  */
  readonly includedServicePrincipals?: string[];
}

export function conditionalAccessPolicyConditionsClientApplicationsToTerraform(struct?: ConditionalAccessPolicyConditionsClientApplicationsOutputReference | ConditionalAccessPolicyConditionsClientApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_service_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedServicePrincipals),
    included_service_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedServicePrincipals),
  }
}


export function conditionalAccessPolicyConditionsClientApplicationsToHclTerraform(struct?: ConditionalAccessPolicyConditionsClientApplicationsOutputReference | ConditionalAccessPolicyConditionsClientApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_service_principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedServicePrincipals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_service_principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedServicePrincipals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConditionalAccessPolicyConditionsClientApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConditionalAccessPolicyConditionsClientApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedServicePrincipals !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedServicePrincipals = this._excludedServicePrincipals;
    }
    if (this._includedServicePrincipals !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedServicePrincipals = this._includedServicePrincipals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionalAccessPolicyConditionsClientApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedServicePrincipals = undefined;
      this._includedServicePrincipals = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedServicePrincipals = value.excludedServicePrincipals;
      this._includedServicePrincipals = value.includedServicePrincipals;
    }
  }

  // excluded_service_principals - computed: false, optional: true, required: false
  private _excludedServicePrincipals?: string[]; 
  public get excludedServicePrincipals() {
    return this.getListAttribute('excluded_service_principals');
  }
  public set excludedServicePrincipals(value: string[]) {
    this._excludedServicePrincipals = value;
  }
  public resetExcludedServicePrincipals() {
    this._excludedServicePrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedServicePrincipalsInput() {
    return this._excludedServicePrincipals;
  }

  // included_service_principals - computed: false, optional: true, required: false
  private _includedServicePrincipals?: string[]; 
  public get includedServicePrincipals() {
    return this.getListAttribute('included_service_principals');
  }
  public set includedServicePrincipals(value: string[]) {
    this._includedServicePrincipals = value;
  }
  public resetIncludedServicePrincipals() {
    this._includedServicePrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedServicePrincipalsInput() {
    return this._includedServicePrincipals;
  }
}
export interface ConditionalAccessPolicyConditionsDevicesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#mode ConditionalAccessPolicy#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#rule ConditionalAccessPolicy#rule}
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


export function conditionalAccessPolicyConditionsDevicesFilterToHclTerraform(struct?: ConditionalAccessPolicyConditionsDevicesFilterOutputReference | ConditionalAccessPolicyConditionsDevicesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#filter ConditionalAccessPolicy#filter}
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


export function conditionalAccessPolicyConditionsDevicesToHclTerraform(struct?: ConditionalAccessPolicyConditionsDevicesOutputReference | ConditionalAccessPolicyConditionsDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: conditionalAccessPolicyConditionsDevicesFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "ConditionalAccessPolicyConditionsDevicesFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#excluded_locations ConditionalAccessPolicy#excluded_locations}
  */
  readonly excludedLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#included_locations ConditionalAccessPolicy#included_locations}
  */
  readonly includedLocations: string[];
}

export function conditionalAccessPolicyConditionsLocationsToTerraform(struct?: ConditionalAccessPolicyConditionsLocationsOutputReference | ConditionalAccessPolicyConditionsLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedLocations),
    included_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedLocations),
  }
}


export function conditionalAccessPolicyConditionsLocationsToHclTerraform(struct?: ConditionalAccessPolicyConditionsLocationsOutputReference | ConditionalAccessPolicyConditionsLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#excluded_platforms ConditionalAccessPolicy#excluded_platforms}
  */
  readonly excludedPlatforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#included_platforms ConditionalAccessPolicy#included_platforms}
  */
  readonly includedPlatforms: string[];
}

export function conditionalAccessPolicyConditionsPlatformsToTerraform(struct?: ConditionalAccessPolicyConditionsPlatformsOutputReference | ConditionalAccessPolicyConditionsPlatforms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedPlatforms),
    included_platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPlatforms),
  }
}


export function conditionalAccessPolicyConditionsPlatformsToHclTerraform(struct?: ConditionalAccessPolicyConditionsPlatformsOutputReference | ConditionalAccessPolicyConditionsPlatforms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_platforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedPlatforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_platforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedPlatforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenants {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#members ConditionalAccessPolicy#members}
  */
  readonly members?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#membership_kind ConditionalAccessPolicy#membership_kind}
  */
  readonly membershipKind: string;
}

export function conditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenantsToTerraform(struct?: ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.members),
    membership_kind: cdktf.stringToTerraform(struct!.membershipKind),
  }
}


export function conditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenantsToHclTerraform(struct?: ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.members),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    membership_kind: {
      value: cdktf.stringToHclTerraform(struct!.membershipKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenantsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    if (this._membershipKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.membershipKind = this._membershipKind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._members = undefined;
      this._membershipKind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._members = value.members;
      this._membershipKind = value.membershipKind;
    }
  }

  // members - computed: false, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // membership_kind - computed: false, optional: false, required: true
  private _membershipKind?: string; 
  public get membershipKind() {
    return this.getStringAttribute('membership_kind');
  }
  public set membershipKind(value: string) {
    this._membershipKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipKindInput() {
    return this._membershipKind;
  }
}

export class ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenantsList extends cdktf.ComplexList {
  public internalValue? : ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenants[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenantsOutputReference {
    return new ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#guest_or_external_user_types ConditionalAccessPolicy#guest_or_external_user_types}
  */
  readonly guestOrExternalUserTypes: string[];
  /**
  * external_tenants block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#external_tenants ConditionalAccessPolicy#external_tenants}
  */
  readonly externalTenants?: ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenants[] | cdktf.IResolvable;
}

export function conditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersToTerraform(struct?: ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    guest_or_external_user_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.guestOrExternalUserTypes),
    external_tenants: cdktf.listMapper(conditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenantsToTerraform, true)(struct!.externalTenants),
  }
}


export function conditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersToHclTerraform(struct?: ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    guest_or_external_user_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.guestOrExternalUserTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_tenants: {
      value: cdktf.listMapperHcl(conditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenantsToHclTerraform, true)(struct!.externalTenants),
      isBlock: true,
      type: "list",
      storageClassType: "ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenantsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guestOrExternalUserTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestOrExternalUserTypes = this._guestOrExternalUserTypes;
    }
    if (this._externalTenants?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTenants = this._externalTenants?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guestOrExternalUserTypes = undefined;
      this._externalTenants.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guestOrExternalUserTypes = value.guestOrExternalUserTypes;
      this._externalTenants.internalValue = value.externalTenants;
    }
  }

  // guest_or_external_user_types - computed: false, optional: false, required: true
  private _guestOrExternalUserTypes?: string[]; 
  public get guestOrExternalUserTypes() {
    return this.getListAttribute('guest_or_external_user_types');
  }
  public set guestOrExternalUserTypes(value: string[]) {
    this._guestOrExternalUserTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guestOrExternalUserTypesInput() {
    return this._guestOrExternalUserTypes;
  }

  // external_tenants - computed: false, optional: true, required: false
  private _externalTenants = new ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenantsList(this, "external_tenants", false);
  public get externalTenants() {
    return this._externalTenants;
  }
  public putExternalTenants(value: ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersExternalTenants[] | cdktf.IResolvable) {
    this._externalTenants.internalValue = value;
  }
  public resetExternalTenants() {
    this._externalTenants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTenantsInput() {
    return this._externalTenants.internalValue;
  }
}

export class ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersList extends cdktf.ComplexList {
  public internalValue? : ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersOutputReference {
    return new ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenants {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#members ConditionalAccessPolicy#members}
  */
  readonly members?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#membership_kind ConditionalAccessPolicy#membership_kind}
  */
  readonly membershipKind: string;
}

export function conditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenantsToTerraform(struct?: ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.members),
    membership_kind: cdktf.stringToTerraform(struct!.membershipKind),
  }
}


export function conditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenantsToHclTerraform(struct?: ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.members),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    membership_kind: {
      value: cdktf.stringToHclTerraform(struct!.membershipKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenantsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    if (this._membershipKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.membershipKind = this._membershipKind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._members = undefined;
      this._membershipKind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._members = value.members;
      this._membershipKind = value.membershipKind;
    }
  }

  // members - computed: false, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // membership_kind - computed: false, optional: false, required: true
  private _membershipKind?: string; 
  public get membershipKind() {
    return this.getStringAttribute('membership_kind');
  }
  public set membershipKind(value: string) {
    this._membershipKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipKindInput() {
    return this._membershipKind;
  }
}

export class ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenantsList extends cdktf.ComplexList {
  public internalValue? : ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenants[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenantsOutputReference {
    return new ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#guest_or_external_user_types ConditionalAccessPolicy#guest_or_external_user_types}
  */
  readonly guestOrExternalUserTypes: string[];
  /**
  * external_tenants block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#external_tenants ConditionalAccessPolicy#external_tenants}
  */
  readonly externalTenants?: ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenants[] | cdktf.IResolvable;
}

export function conditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersToTerraform(struct?: ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    guest_or_external_user_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.guestOrExternalUserTypes),
    external_tenants: cdktf.listMapper(conditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenantsToTerraform, true)(struct!.externalTenants),
  }
}


export function conditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersToHclTerraform(struct?: ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    guest_or_external_user_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.guestOrExternalUserTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_tenants: {
      value: cdktf.listMapperHcl(conditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenantsToHclTerraform, true)(struct!.externalTenants),
      isBlock: true,
      type: "list",
      storageClassType: "ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenantsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guestOrExternalUserTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestOrExternalUserTypes = this._guestOrExternalUserTypes;
    }
    if (this._externalTenants?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTenants = this._externalTenants?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guestOrExternalUserTypes = undefined;
      this._externalTenants.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guestOrExternalUserTypes = value.guestOrExternalUserTypes;
      this._externalTenants.internalValue = value.externalTenants;
    }
  }

  // guest_or_external_user_types - computed: false, optional: false, required: true
  private _guestOrExternalUserTypes?: string[]; 
  public get guestOrExternalUserTypes() {
    return this.getListAttribute('guest_or_external_user_types');
  }
  public set guestOrExternalUserTypes(value: string[]) {
    this._guestOrExternalUserTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guestOrExternalUserTypesInput() {
    return this._guestOrExternalUserTypes;
  }

  // external_tenants - computed: false, optional: true, required: false
  private _externalTenants = new ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenantsList(this, "external_tenants", false);
  public get externalTenants() {
    return this._externalTenants;
  }
  public putExternalTenants(value: ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersExternalTenants[] | cdktf.IResolvable) {
    this._externalTenants.internalValue = value;
  }
  public resetExternalTenants() {
    this._externalTenants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTenantsInput() {
    return this._externalTenants.internalValue;
  }
}

export class ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersList extends cdktf.ComplexList {
  public internalValue? : ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersOutputReference {
    return new ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConditionalAccessPolicyConditionsUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#excluded_groups ConditionalAccessPolicy#excluded_groups}
  */
  readonly excludedGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#excluded_roles ConditionalAccessPolicy#excluded_roles}
  */
  readonly excludedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#excluded_users ConditionalAccessPolicy#excluded_users}
  */
  readonly excludedUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#included_groups ConditionalAccessPolicy#included_groups}
  */
  readonly includedGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#included_roles ConditionalAccessPolicy#included_roles}
  */
  readonly includedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#included_users ConditionalAccessPolicy#included_users}
  */
  readonly includedUsers?: string[];
  /**
  * excluded_guests_or_external_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#excluded_guests_or_external_users ConditionalAccessPolicy#excluded_guests_or_external_users}
  */
  readonly excludedGuestsOrExternalUsers?: ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsers[] | cdktf.IResolvable;
  /**
  * included_guests_or_external_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#included_guests_or_external_users ConditionalAccessPolicy#included_guests_or_external_users}
  */
  readonly includedGuestsOrExternalUsers?: ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsers[] | cdktf.IResolvable;
}

export function conditionalAccessPolicyConditionsUsersToTerraform(struct?: ConditionalAccessPolicyConditionsUsersOutputReference | ConditionalAccessPolicyConditionsUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedGroups),
    excluded_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedRoles),
    excluded_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedUsers),
    included_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedGroups),
    included_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedRoles),
    included_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedUsers),
    excluded_guests_or_external_users: cdktf.listMapper(conditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersToTerraform, true)(struct!.excludedGuestsOrExternalUsers),
    included_guests_or_external_users: cdktf.listMapper(conditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersToTerraform, true)(struct!.includedGuestsOrExternalUsers),
  }
}


export function conditionalAccessPolicyConditionsUsersToHclTerraform(struct?: ConditionalAccessPolicyConditionsUsersOutputReference | ConditionalAccessPolicyConditionsUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_guests_or_external_users: {
      value: cdktf.listMapperHcl(conditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersToHclTerraform, true)(struct!.excludedGuestsOrExternalUsers),
      isBlock: true,
      type: "list",
      storageClassType: "ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersList",
    },
    included_guests_or_external_users: {
      value: cdktf.listMapperHcl(conditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersToHclTerraform, true)(struct!.includedGuestsOrExternalUsers),
      isBlock: true,
      type: "list",
      storageClassType: "ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._excludedGuestsOrExternalUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedGuestsOrExternalUsers = this._excludedGuestsOrExternalUsers?.internalValue;
    }
    if (this._includedGuestsOrExternalUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedGuestsOrExternalUsers = this._includedGuestsOrExternalUsers?.internalValue;
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
      this._excludedGuestsOrExternalUsers.internalValue = undefined;
      this._includedGuestsOrExternalUsers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedGroups = value.excludedGroups;
      this._excludedRoles = value.excludedRoles;
      this._excludedUsers = value.excludedUsers;
      this._includedGroups = value.includedGroups;
      this._includedRoles = value.includedRoles;
      this._includedUsers = value.includedUsers;
      this._excludedGuestsOrExternalUsers.internalValue = value.excludedGuestsOrExternalUsers;
      this._includedGuestsOrExternalUsers.internalValue = value.includedGuestsOrExternalUsers;
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

  // excluded_guests_or_external_users - computed: false, optional: true, required: false
  private _excludedGuestsOrExternalUsers = new ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsersList(this, "excluded_guests_or_external_users", false);
  public get excludedGuestsOrExternalUsers() {
    return this._excludedGuestsOrExternalUsers;
  }
  public putExcludedGuestsOrExternalUsers(value: ConditionalAccessPolicyConditionsUsersExcludedGuestsOrExternalUsers[] | cdktf.IResolvable) {
    this._excludedGuestsOrExternalUsers.internalValue = value;
  }
  public resetExcludedGuestsOrExternalUsers() {
    this._excludedGuestsOrExternalUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedGuestsOrExternalUsersInput() {
    return this._excludedGuestsOrExternalUsers.internalValue;
  }

  // included_guests_or_external_users - computed: false, optional: true, required: false
  private _includedGuestsOrExternalUsers = new ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsersList(this, "included_guests_or_external_users", false);
  public get includedGuestsOrExternalUsers() {
    return this._includedGuestsOrExternalUsers;
  }
  public putIncludedGuestsOrExternalUsers(value: ConditionalAccessPolicyConditionsUsersIncludedGuestsOrExternalUsers[] | cdktf.IResolvable) {
    this._includedGuestsOrExternalUsers.internalValue = value;
  }
  public resetIncludedGuestsOrExternalUsers() {
    this._includedGuestsOrExternalUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedGuestsOrExternalUsersInput() {
    return this._includedGuestsOrExternalUsers.internalValue;
  }
}
export interface ConditionalAccessPolicyConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#client_app_types ConditionalAccessPolicy#client_app_types}
  */
  readonly clientAppTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#service_principal_risk_levels ConditionalAccessPolicy#service_principal_risk_levels}
  */
  readonly servicePrincipalRiskLevels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#sign_in_risk_levels ConditionalAccessPolicy#sign_in_risk_levels}
  */
  readonly signInRiskLevels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#user_risk_levels ConditionalAccessPolicy#user_risk_levels}
  */
  readonly userRiskLevels?: string[];
  /**
  * applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#applications ConditionalAccessPolicy#applications}
  */
  readonly applications: ConditionalAccessPolicyConditionsApplications;
  /**
  * client_applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#client_applications ConditionalAccessPolicy#client_applications}
  */
  readonly clientApplications?: ConditionalAccessPolicyConditionsClientApplications;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#devices ConditionalAccessPolicy#devices}
  */
  readonly devices?: ConditionalAccessPolicyConditionsDevices;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#locations ConditionalAccessPolicy#locations}
  */
  readonly locations?: ConditionalAccessPolicyConditionsLocations;
  /**
  * platforms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#platforms ConditionalAccessPolicy#platforms}
  */
  readonly platforms?: ConditionalAccessPolicyConditionsPlatforms;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#users ConditionalAccessPolicy#users}
  */
  readonly users: ConditionalAccessPolicyConditionsUsers;
}

export function conditionalAccessPolicyConditionsToTerraform(struct?: ConditionalAccessPolicyConditionsOutputReference | ConditionalAccessPolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_app_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientAppTypes),
    service_principal_risk_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servicePrincipalRiskLevels),
    sign_in_risk_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.signInRiskLevels),
    user_risk_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userRiskLevels),
    applications: conditionalAccessPolicyConditionsApplicationsToTerraform(struct!.applications),
    client_applications: conditionalAccessPolicyConditionsClientApplicationsToTerraform(struct!.clientApplications),
    devices: conditionalAccessPolicyConditionsDevicesToTerraform(struct!.devices),
    locations: conditionalAccessPolicyConditionsLocationsToTerraform(struct!.locations),
    platforms: conditionalAccessPolicyConditionsPlatformsToTerraform(struct!.platforms),
    users: conditionalAccessPolicyConditionsUsersToTerraform(struct!.users),
  }
}


export function conditionalAccessPolicyConditionsToHclTerraform(struct?: ConditionalAccessPolicyConditionsOutputReference | ConditionalAccessPolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_app_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientAppTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_principal_risk_levels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servicePrincipalRiskLevels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sign_in_risk_levels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.signInRiskLevels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_risk_levels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userRiskLevels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    applications: {
      value: conditionalAccessPolicyConditionsApplicationsToHclTerraform(struct!.applications),
      isBlock: true,
      type: "list",
      storageClassType: "ConditionalAccessPolicyConditionsApplicationsList",
    },
    client_applications: {
      value: conditionalAccessPolicyConditionsClientApplicationsToHclTerraform(struct!.clientApplications),
      isBlock: true,
      type: "list",
      storageClassType: "ConditionalAccessPolicyConditionsClientApplicationsList",
    },
    devices: {
      value: conditionalAccessPolicyConditionsDevicesToHclTerraform(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "ConditionalAccessPolicyConditionsDevicesList",
    },
    locations: {
      value: conditionalAccessPolicyConditionsLocationsToHclTerraform(struct!.locations),
      isBlock: true,
      type: "list",
      storageClassType: "ConditionalAccessPolicyConditionsLocationsList",
    },
    platforms: {
      value: conditionalAccessPolicyConditionsPlatformsToHclTerraform(struct!.platforms),
      isBlock: true,
      type: "list",
      storageClassType: "ConditionalAccessPolicyConditionsPlatformsList",
    },
    users: {
      value: conditionalAccessPolicyConditionsUsersToHclTerraform(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "ConditionalAccessPolicyConditionsUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._servicePrincipalRiskLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalRiskLevels = this._servicePrincipalRiskLevels;
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
    if (this._clientApplications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientApplications = this._clientApplications?.internalValue;
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
      this._servicePrincipalRiskLevels = undefined;
      this._signInRiskLevels = undefined;
      this._userRiskLevels = undefined;
      this._applications.internalValue = undefined;
      this._clientApplications.internalValue = undefined;
      this._devices.internalValue = undefined;
      this._locations.internalValue = undefined;
      this._platforms.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientAppTypes = value.clientAppTypes;
      this._servicePrincipalRiskLevels = value.servicePrincipalRiskLevels;
      this._signInRiskLevels = value.signInRiskLevels;
      this._userRiskLevels = value.userRiskLevels;
      this._applications.internalValue = value.applications;
      this._clientApplications.internalValue = value.clientApplications;
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

  // service_principal_risk_levels - computed: false, optional: true, required: false
  private _servicePrincipalRiskLevels?: string[]; 
  public get servicePrincipalRiskLevels() {
    return this.getListAttribute('service_principal_risk_levels');
  }
  public set servicePrincipalRiskLevels(value: string[]) {
    this._servicePrincipalRiskLevels = value;
  }
  public resetServicePrincipalRiskLevels() {
    this._servicePrincipalRiskLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalRiskLevelsInput() {
    return this._servicePrincipalRiskLevels;
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

  // client_applications - computed: false, optional: true, required: false
  private _clientApplications = new ConditionalAccessPolicyConditionsClientApplicationsOutputReference(this, "client_applications");
  public get clientApplications() {
    return this._clientApplications;
  }
  public putClientApplications(value: ConditionalAccessPolicyConditionsClientApplications) {
    this._clientApplications.internalValue = value;
  }
  public resetClientApplications() {
    this._clientApplications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientApplicationsInput() {
    return this._clientApplications.internalValue;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#authentication_strength_policy_id ConditionalAccessPolicy#authentication_strength_policy_id}
  */
  readonly authenticationStrengthPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#built_in_controls ConditionalAccessPolicy#built_in_controls}
  */
  readonly builtInControls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#custom_authentication_factors ConditionalAccessPolicy#custom_authentication_factors}
  */
  readonly customAuthenticationFactors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#operator ConditionalAccessPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#terms_of_use ConditionalAccessPolicy#terms_of_use}
  */
  readonly termsOfUse?: string[];
}

export function conditionalAccessPolicyGrantControlsToTerraform(struct?: ConditionalAccessPolicyGrantControlsOutputReference | ConditionalAccessPolicyGrantControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_strength_policy_id: cdktf.stringToTerraform(struct!.authenticationStrengthPolicyId),
    built_in_controls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.builtInControls),
    custom_authentication_factors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customAuthenticationFactors),
    operator: cdktf.stringToTerraform(struct!.operator),
    terms_of_use: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.termsOfUse),
  }
}


export function conditionalAccessPolicyGrantControlsToHclTerraform(struct?: ConditionalAccessPolicyGrantControlsOutputReference | ConditionalAccessPolicyGrantControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_strength_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.authenticationStrengthPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    built_in_controls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.builtInControls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_authentication_factors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customAuthenticationFactors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terms_of_use: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.termsOfUse),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._authenticationStrengthPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationStrengthPolicyId = this._authenticationStrengthPolicyId;
    }
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
      this._authenticationStrengthPolicyId = undefined;
      this._builtInControls = undefined;
      this._customAuthenticationFactors = undefined;
      this._operator = undefined;
      this._termsOfUse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationStrengthPolicyId = value.authenticationStrengthPolicyId;
      this._builtInControls = value.builtInControls;
      this._customAuthenticationFactors = value.customAuthenticationFactors;
      this._operator = value.operator;
      this._termsOfUse = value.termsOfUse;
    }
  }

  // authentication_strength_policy_id - computed: false, optional: true, required: false
  private _authenticationStrengthPolicyId?: string; 
  public get authenticationStrengthPolicyId() {
    return this.getStringAttribute('authentication_strength_policy_id');
  }
  public set authenticationStrengthPolicyId(value: string) {
    this._authenticationStrengthPolicyId = value;
  }
  public resetAuthenticationStrengthPolicyId() {
    this._authenticationStrengthPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationStrengthPolicyIdInput() {
    return this._authenticationStrengthPolicyId;
  }

  // built_in_controls - computed: false, optional: true, required: false
  private _builtInControls?: string[]; 
  public get builtInControls() {
    return this.getListAttribute('built_in_controls');
  }
  public set builtInControls(value: string[]) {
    this._builtInControls = value;
  }
  public resetBuiltInControls() {
    this._builtInControls = undefined;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#application_enforced_restrictions_enabled ConditionalAccessPolicy#application_enforced_restrictions_enabled}
  */
  readonly applicationEnforcedRestrictionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#cloud_app_security_policy ConditionalAccessPolicy#cloud_app_security_policy}
  */
  readonly cloudAppSecurityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#disable_resilience_defaults ConditionalAccessPolicy#disable_resilience_defaults}
  */
  readonly disableResilienceDefaults?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#persistent_browser_mode ConditionalAccessPolicy#persistent_browser_mode}
  */
  readonly persistentBrowserMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#sign_in_frequency ConditionalAccessPolicy#sign_in_frequency}
  */
  readonly signInFrequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#sign_in_frequency_authentication_type ConditionalAccessPolicy#sign_in_frequency_authentication_type}
  */
  readonly signInFrequencyAuthenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#sign_in_frequency_interval ConditionalAccessPolicy#sign_in_frequency_interval}
  */
  readonly signInFrequencyInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#sign_in_frequency_period ConditionalAccessPolicy#sign_in_frequency_period}
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
    disable_resilience_defaults: cdktf.booleanToTerraform(struct!.disableResilienceDefaults),
    persistent_browser_mode: cdktf.stringToTerraform(struct!.persistentBrowserMode),
    sign_in_frequency: cdktf.numberToTerraform(struct!.signInFrequency),
    sign_in_frequency_authentication_type: cdktf.stringToTerraform(struct!.signInFrequencyAuthenticationType),
    sign_in_frequency_interval: cdktf.stringToTerraform(struct!.signInFrequencyInterval),
    sign_in_frequency_period: cdktf.stringToTerraform(struct!.signInFrequencyPeriod),
  }
}


export function conditionalAccessPolicySessionControlsToHclTerraform(struct?: ConditionalAccessPolicySessionControlsOutputReference | ConditionalAccessPolicySessionControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_enforced_restrictions_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.applicationEnforcedRestrictionsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_app_security_policy: {
      value: cdktf.stringToHclTerraform(struct!.cloudAppSecurityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resilience_defaults: {
      value: cdktf.booleanToHclTerraform(struct!.disableResilienceDefaults),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    persistent_browser_mode: {
      value: cdktf.stringToHclTerraform(struct!.persistentBrowserMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_in_frequency: {
      value: cdktf.numberToHclTerraform(struct!.signInFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sign_in_frequency_authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.signInFrequencyAuthenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_in_frequency_interval: {
      value: cdktf.stringToHclTerraform(struct!.signInFrequencyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_in_frequency_period: {
      value: cdktf.stringToHclTerraform(struct!.signInFrequencyPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._disableResilienceDefaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResilienceDefaults = this._disableResilienceDefaults;
    }
    if (this._persistentBrowserMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentBrowserMode = this._persistentBrowserMode;
    }
    if (this._signInFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.signInFrequency = this._signInFrequency;
    }
    if (this._signInFrequencyAuthenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.signInFrequencyAuthenticationType = this._signInFrequencyAuthenticationType;
    }
    if (this._signInFrequencyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.signInFrequencyInterval = this._signInFrequencyInterval;
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
      this._disableResilienceDefaults = undefined;
      this._persistentBrowserMode = undefined;
      this._signInFrequency = undefined;
      this._signInFrequencyAuthenticationType = undefined;
      this._signInFrequencyInterval = undefined;
      this._signInFrequencyPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationEnforcedRestrictionsEnabled = value.applicationEnforcedRestrictionsEnabled;
      this._cloudAppSecurityPolicy = value.cloudAppSecurityPolicy;
      this._disableResilienceDefaults = value.disableResilienceDefaults;
      this._persistentBrowserMode = value.persistentBrowserMode;
      this._signInFrequency = value.signInFrequency;
      this._signInFrequencyAuthenticationType = value.signInFrequencyAuthenticationType;
      this._signInFrequencyInterval = value.signInFrequencyInterval;
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

  // disable_resilience_defaults - computed: false, optional: true, required: false
  private _disableResilienceDefaults?: boolean | cdktf.IResolvable; 
  public get disableResilienceDefaults() {
    return this.getBooleanAttribute('disable_resilience_defaults');
  }
  public set disableResilienceDefaults(value: boolean | cdktf.IResolvable) {
    this._disableResilienceDefaults = value;
  }
  public resetDisableResilienceDefaults() {
    this._disableResilienceDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResilienceDefaultsInput() {
    return this._disableResilienceDefaults;
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

  // sign_in_frequency_authentication_type - computed: true, optional: true, required: false
  private _signInFrequencyAuthenticationType?: string; 
  public get signInFrequencyAuthenticationType() {
    return this.getStringAttribute('sign_in_frequency_authentication_type');
  }
  public set signInFrequencyAuthenticationType(value: string) {
    this._signInFrequencyAuthenticationType = value;
  }
  public resetSignInFrequencyAuthenticationType() {
    this._signInFrequencyAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInFrequencyAuthenticationTypeInput() {
    return this._signInFrequencyAuthenticationType;
  }

  // sign_in_frequency_interval - computed: true, optional: true, required: false
  private _signInFrequencyInterval?: string; 
  public get signInFrequencyInterval() {
    return this.getStringAttribute('sign_in_frequency_interval');
  }
  public set signInFrequencyInterval(value: string) {
    this._signInFrequencyInterval = value;
  }
  public resetSignInFrequencyInterval() {
    this._signInFrequencyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInFrequencyIntervalInput() {
    return this._signInFrequencyInterval;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#create ConditionalAccessPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#delete ConditionalAccessPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#read ConditionalAccessPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#update ConditionalAccessPolicy#update}
  */
  readonly update?: string;
}

export function conditionalAccessPolicyTimeoutsToTerraform(struct?: ConditionalAccessPolicyTimeouts | cdktf.IResolvable): any {
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


export function conditionalAccessPolicyTimeoutsToHclTerraform(struct?: ConditionalAccessPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConditionalAccessPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy azuread_conditional_access_policy}
*/
export class ConditionalAccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_conditional_access_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConditionalAccessPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConditionalAccessPolicy to import
  * @param importFromId The id of the existing ConditionalAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConditionalAccessPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_conditional_access_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/conditional_access_policy azuread_conditional_access_policy} Resource
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
        providerVersion: '2.53.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
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

  // grant_controls - computed: false, optional: true, required: false
  private _grantControls = new ConditionalAccessPolicyGrantControlsOutputReference(this, "grant_controls");
  public get grantControls() {
    return this._grantControls;
  }
  public putGrantControls(value: ConditionalAccessPolicyGrantControls) {
    this._grantControls.internalValue = value;
  }
  public resetGrantControls() {
    this._grantControls.internalValue = undefined;
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: conditionalAccessPolicyConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConditionalAccessPolicyConditionsList",
      },
      grant_controls: {
        value: conditionalAccessPolicyGrantControlsToHclTerraform(this._grantControls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConditionalAccessPolicyGrantControlsList",
      },
      session_controls: {
        value: conditionalAccessPolicySessionControlsToHclTerraform(this._sessionControls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConditionalAccessPolicySessionControlsList",
      },
      timeouts: {
        value: conditionalAccessPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConditionalAccessPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
