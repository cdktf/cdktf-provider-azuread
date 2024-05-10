// https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessPackageAssignmentPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the access package that will contain the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#access_package_id AccessPackageAssignmentPolicy#access_package_id}
  */
  readonly accessPackageId: string;
  /**
  * The description of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#description AccessPackageAssignmentPolicy#description}
  */
  readonly description: string;
  /**
  * The display name of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#display_name AccessPackageAssignmentPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * How many days this assignment is valid for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#duration_in_days AccessPackageAssignmentPolicy#duration_in_days}
  */
  readonly durationInDays?: number;
  /**
  * The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#expiration_date AccessPackageAssignmentPolicy#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * When enabled, users will be able to request extension of their access to this package before their access expires
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#extension_enabled AccessPackageAssignmentPolicy#extension_enabled}
  */
  readonly extensionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#id AccessPackageAssignmentPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * approval_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#approval_settings AccessPackageAssignmentPolicy#approval_settings}
  */
  readonly approvalSettings?: AccessPackageAssignmentPolicyApprovalSettings;
  /**
  * assignment_review_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#assignment_review_settings AccessPackageAssignmentPolicy#assignment_review_settings}
  */
  readonly assignmentReviewSettings?: AccessPackageAssignmentPolicyAssignmentReviewSettings;
  /**
  * question block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#question AccessPackageAssignmentPolicy#question}
  */
  readonly question?: AccessPackageAssignmentPolicyQuestion[] | cdktf.IResolvable;
  /**
  * requestor_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#requestor_settings AccessPackageAssignmentPolicy#requestor_settings}
  */
  readonly requestorSettings?: AccessPackageAssignmentPolicyRequestorSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#timeouts AccessPackageAssignmentPolicy#timeouts}
  */
  readonly timeouts?: AccessPackageAssignmentPolicyTimeouts;
}
export interface AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover {
  /**
  * For a user in an approval stage, this property indicates whether the user is a backup fallback approver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#backup AccessPackageAssignmentPolicy#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * The object ID of the subject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#object_id AccessPackageAssignmentPolicy#object_id}
  */
  readonly objectId?: string;
  /**
  * Type of users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#subject_type AccessPackageAssignmentPolicy#subject_type}
  */
  readonly subjectType: string;
}

export function accessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverToTerraform(struct?: AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: cdktf.booleanToTerraform(struct!.backup),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    subject_type: cdktf.stringToTerraform(struct!.subjectType),
  }
}


export function accessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverToHclTerraform(struct?: AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup: {
      value: cdktf.booleanToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_type: {
      value: cdktf.stringToHclTerraform(struct!.subjectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._subjectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectType = this._subjectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backup = undefined;
      this._objectId = undefined;
      this._subjectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backup = value.backup;
      this._objectId = value.objectId;
      this._subjectType = value.subjectType;
    }
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // subject_type - computed: false, optional: false, required: true
  private _subjectType?: string; 
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
  public set subjectType(value: string) {
    this._subjectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTypeInput() {
    return this._subjectType;
  }
}

export class AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList extends cdktf.ComplexList {
  public internalValue? : AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover[] | cdktf.IResolvable

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
  public get(index: number): AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference {
    return new AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover {
  /**
  * For a user in an approval stage, this property indicates whether the user is a backup fallback approver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#backup AccessPackageAssignmentPolicy#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * The object ID of the subject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#object_id AccessPackageAssignmentPolicy#object_id}
  */
  readonly objectId?: string;
  /**
  * Type of users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#subject_type AccessPackageAssignmentPolicy#subject_type}
  */
  readonly subjectType: string;
}

export function accessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverToTerraform(struct?: AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: cdktf.booleanToTerraform(struct!.backup),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    subject_type: cdktf.stringToTerraform(struct!.subjectType),
  }
}


export function accessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverToHclTerraform(struct?: AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup: {
      value: cdktf.booleanToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_type: {
      value: cdktf.stringToHclTerraform(struct!.subjectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._subjectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectType = this._subjectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backup = undefined;
      this._objectId = undefined;
      this._subjectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backup = value.backup;
      this._objectId = value.objectId;
      this._subjectType = value.subjectType;
    }
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // subject_type - computed: false, optional: false, required: true
  private _subjectType?: string; 
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
  public set subjectType(value: string) {
    this._subjectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTypeInput() {
    return this._subjectType;
  }
}

export class AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList extends cdktf.ComplexList {
  public internalValue? : AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover[] | cdktf.IResolvable

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
  public get(index: number): AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference {
    return new AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPackageAssignmentPolicyApprovalSettingsApprovalStage {
  /**
  * If no action taken, forward to alternate approvers?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#alternative_approval_enabled AccessPackageAssignmentPolicy#alternative_approval_enabled}
  */
  readonly alternativeApprovalEnabled?: boolean | cdktf.IResolvable;
  /**
  * Decision must be made in how many days? If a request is not approved within this time period after it is made, it will be automatically rejected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#approval_timeout_in_days AccessPackageAssignmentPolicy#approval_timeout_in_days}
  */
  readonly approvalTimeoutInDays: number;
  /**
  * Whether an approver must provide a justification for their decision. Justification is visible to other approvers and the requestor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#approver_justification_required AccessPackageAssignmentPolicy#approver_justification_required}
  */
  readonly approverJustificationRequired?: boolean | cdktf.IResolvable;
  /**
  * Forward to alternate approver(s) after how many days?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#enable_alternative_approval_in_days AccessPackageAssignmentPolicy#enable_alternative_approval_in_days}
  */
  readonly enableAlternativeApprovalInDays?: number;
  /**
  * alternative_approver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#alternative_approver AccessPackageAssignmentPolicy#alternative_approver}
  */
  readonly alternativeApprover?: AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover[] | cdktf.IResolvable;
  /**
  * primary_approver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#primary_approver AccessPackageAssignmentPolicy#primary_approver}
  */
  readonly primaryApprover?: AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover[] | cdktf.IResolvable;
}

export function accessPackageAssignmentPolicyApprovalSettingsApprovalStageToTerraform(struct?: AccessPackageAssignmentPolicyApprovalSettingsApprovalStage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternative_approval_enabled: cdktf.booleanToTerraform(struct!.alternativeApprovalEnabled),
    approval_timeout_in_days: cdktf.numberToTerraform(struct!.approvalTimeoutInDays),
    approver_justification_required: cdktf.booleanToTerraform(struct!.approverJustificationRequired),
    enable_alternative_approval_in_days: cdktf.numberToTerraform(struct!.enableAlternativeApprovalInDays),
    alternative_approver: cdktf.listMapper(accessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverToTerraform, true)(struct!.alternativeApprover),
    primary_approver: cdktf.listMapper(accessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverToTerraform, true)(struct!.primaryApprover),
  }
}


export function accessPackageAssignmentPolicyApprovalSettingsApprovalStageToHclTerraform(struct?: AccessPackageAssignmentPolicyApprovalSettingsApprovalStage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternative_approval_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.alternativeApprovalEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    approval_timeout_in_days: {
      value: cdktf.numberToHclTerraform(struct!.approvalTimeoutInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    approver_justification_required: {
      value: cdktf.booleanToHclTerraform(struct!.approverJustificationRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_alternative_approval_in_days: {
      value: cdktf.numberToHclTerraform(struct!.enableAlternativeApprovalInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alternative_approver: {
      value: cdktf.listMapperHcl(accessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverToHclTerraform, true)(struct!.alternativeApprover),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList",
    },
    primary_approver: {
      value: cdktf.listMapperHcl(accessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverToHclTerraform, true)(struct!.primaryApprover),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPackageAssignmentPolicyApprovalSettingsApprovalStage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternativeApprovalEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternativeApprovalEnabled = this._alternativeApprovalEnabled;
    }
    if (this._approvalTimeoutInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalTimeoutInDays = this._approvalTimeoutInDays;
    }
    if (this._approverJustificationRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.approverJustificationRequired = this._approverJustificationRequired;
    }
    if (this._enableAlternativeApprovalInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAlternativeApprovalInDays = this._enableAlternativeApprovalInDays;
    }
    if (this._alternativeApprover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternativeApprover = this._alternativeApprover?.internalValue;
    }
    if (this._primaryApprover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryApprover = this._primaryApprover?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPackageAssignmentPolicyApprovalSettingsApprovalStage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternativeApprovalEnabled = undefined;
      this._approvalTimeoutInDays = undefined;
      this._approverJustificationRequired = undefined;
      this._enableAlternativeApprovalInDays = undefined;
      this._alternativeApprover.internalValue = undefined;
      this._primaryApprover.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternativeApprovalEnabled = value.alternativeApprovalEnabled;
      this._approvalTimeoutInDays = value.approvalTimeoutInDays;
      this._approverJustificationRequired = value.approverJustificationRequired;
      this._enableAlternativeApprovalInDays = value.enableAlternativeApprovalInDays;
      this._alternativeApprover.internalValue = value.alternativeApprover;
      this._primaryApprover.internalValue = value.primaryApprover;
    }
  }

  // alternative_approval_enabled - computed: false, optional: true, required: false
  private _alternativeApprovalEnabled?: boolean | cdktf.IResolvable; 
  public get alternativeApprovalEnabled() {
    return this.getBooleanAttribute('alternative_approval_enabled');
  }
  public set alternativeApprovalEnabled(value: boolean | cdktf.IResolvable) {
    this._alternativeApprovalEnabled = value;
  }
  public resetAlternativeApprovalEnabled() {
    this._alternativeApprovalEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeApprovalEnabledInput() {
    return this._alternativeApprovalEnabled;
  }

  // approval_timeout_in_days - computed: false, optional: false, required: true
  private _approvalTimeoutInDays?: number; 
  public get approvalTimeoutInDays() {
    return this.getNumberAttribute('approval_timeout_in_days');
  }
  public set approvalTimeoutInDays(value: number) {
    this._approvalTimeoutInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalTimeoutInDaysInput() {
    return this._approvalTimeoutInDays;
  }

  // approver_justification_required - computed: false, optional: true, required: false
  private _approverJustificationRequired?: boolean | cdktf.IResolvable; 
  public get approverJustificationRequired() {
    return this.getBooleanAttribute('approver_justification_required');
  }
  public set approverJustificationRequired(value: boolean | cdktf.IResolvable) {
    this._approverJustificationRequired = value;
  }
  public resetApproverJustificationRequired() {
    this._approverJustificationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverJustificationRequiredInput() {
    return this._approverJustificationRequired;
  }

  // enable_alternative_approval_in_days - computed: false, optional: true, required: false
  private _enableAlternativeApprovalInDays?: number; 
  public get enableAlternativeApprovalInDays() {
    return this.getNumberAttribute('enable_alternative_approval_in_days');
  }
  public set enableAlternativeApprovalInDays(value: number) {
    this._enableAlternativeApprovalInDays = value;
  }
  public resetEnableAlternativeApprovalInDays() {
    this._enableAlternativeApprovalInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAlternativeApprovalInDaysInput() {
    return this._enableAlternativeApprovalInDays;
  }

  // alternative_approver - computed: false, optional: true, required: false
  private _alternativeApprover = new AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList(this, "alternative_approver", false);
  public get alternativeApprover() {
    return this._alternativeApprover;
  }
  public putAlternativeApprover(value: AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover[] | cdktf.IResolvable) {
    this._alternativeApprover.internalValue = value;
  }
  public resetAlternativeApprover() {
    this._alternativeApprover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeApproverInput() {
    return this._alternativeApprover.internalValue;
  }

  // primary_approver - computed: false, optional: true, required: false
  private _primaryApprover = new AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList(this, "primary_approver", false);
  public get primaryApprover() {
    return this._primaryApprover;
  }
  public putPrimaryApprover(value: AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover[] | cdktf.IResolvable) {
    this._primaryApprover.internalValue = value;
  }
  public resetPrimaryApprover() {
    this._primaryApprover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryApproverInput() {
    return this._primaryApprover.internalValue;
  }
}

export class AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList extends cdktf.ComplexList {
  public internalValue? : AccessPackageAssignmentPolicyApprovalSettingsApprovalStage[] | cdktf.IResolvable

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
  public get(index: number): AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference {
    return new AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPackageAssignmentPolicyApprovalSettings {
  /**
  * Whether an approval is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#approval_required AccessPackageAssignmentPolicy#approval_required}
  */
  readonly approvalRequired?: boolean | cdktf.IResolvable;
  /**
  * Whether an approval is required to grant extension. Same approval settings used to approve initial access will apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#approval_required_for_extension AccessPackageAssignmentPolicy#approval_required_for_extension}
  */
  readonly approvalRequiredForExtension?: boolean | cdktf.IResolvable;
  /**
  * Whether requestor are required to provide a justification to request an access package. Justification is visible to other approvers and the requestor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#requestor_justification_required AccessPackageAssignmentPolicy#requestor_justification_required}
  */
  readonly requestorJustificationRequired?: boolean | cdktf.IResolvable;
  /**
  * approval_stage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#approval_stage AccessPackageAssignmentPolicy#approval_stage}
  */
  readonly approvalStage?: AccessPackageAssignmentPolicyApprovalSettingsApprovalStage[] | cdktf.IResolvable;
}

export function accessPackageAssignmentPolicyApprovalSettingsToTerraform(struct?: AccessPackageAssignmentPolicyApprovalSettingsOutputReference | AccessPackageAssignmentPolicyApprovalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approval_required: cdktf.booleanToTerraform(struct!.approvalRequired),
    approval_required_for_extension: cdktf.booleanToTerraform(struct!.approvalRequiredForExtension),
    requestor_justification_required: cdktf.booleanToTerraform(struct!.requestorJustificationRequired),
    approval_stage: cdktf.listMapper(accessPackageAssignmentPolicyApprovalSettingsApprovalStageToTerraform, true)(struct!.approvalStage),
  }
}


export function accessPackageAssignmentPolicyApprovalSettingsToHclTerraform(struct?: AccessPackageAssignmentPolicyApprovalSettingsOutputReference | AccessPackageAssignmentPolicyApprovalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approval_required: {
      value: cdktf.booleanToHclTerraform(struct!.approvalRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    approval_required_for_extension: {
      value: cdktf.booleanToHclTerraform(struct!.approvalRequiredForExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    requestor_justification_required: {
      value: cdktf.booleanToHclTerraform(struct!.requestorJustificationRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    approval_stage: {
      value: cdktf.listMapperHcl(accessPackageAssignmentPolicyApprovalSettingsApprovalStageToHclTerraform, true)(struct!.approvalStage),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPackageAssignmentPolicyApprovalSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessPackageAssignmentPolicyApprovalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvalRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalRequired = this._approvalRequired;
    }
    if (this._approvalRequiredForExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalRequiredForExtension = this._approvalRequiredForExtension;
    }
    if (this._requestorJustificationRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestorJustificationRequired = this._requestorJustificationRequired;
    }
    if (this._approvalStage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalStage = this._approvalStage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPackageAssignmentPolicyApprovalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._approvalRequired = undefined;
      this._approvalRequiredForExtension = undefined;
      this._requestorJustificationRequired = undefined;
      this._approvalStage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._approvalRequired = value.approvalRequired;
      this._approvalRequiredForExtension = value.approvalRequiredForExtension;
      this._requestorJustificationRequired = value.requestorJustificationRequired;
      this._approvalStage.internalValue = value.approvalStage;
    }
  }

  // approval_required - computed: false, optional: true, required: false
  private _approvalRequired?: boolean | cdktf.IResolvable; 
  public get approvalRequired() {
    return this.getBooleanAttribute('approval_required');
  }
  public set approvalRequired(value: boolean | cdktf.IResolvable) {
    this._approvalRequired = value;
  }
  public resetApprovalRequired() {
    this._approvalRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRequiredInput() {
    return this._approvalRequired;
  }

  // approval_required_for_extension - computed: false, optional: true, required: false
  private _approvalRequiredForExtension?: boolean | cdktf.IResolvable; 
  public get approvalRequiredForExtension() {
    return this.getBooleanAttribute('approval_required_for_extension');
  }
  public set approvalRequiredForExtension(value: boolean | cdktf.IResolvable) {
    this._approvalRequiredForExtension = value;
  }
  public resetApprovalRequiredForExtension() {
    this._approvalRequiredForExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRequiredForExtensionInput() {
    return this._approvalRequiredForExtension;
  }

  // requestor_justification_required - computed: false, optional: true, required: false
  private _requestorJustificationRequired?: boolean | cdktf.IResolvable; 
  public get requestorJustificationRequired() {
    return this.getBooleanAttribute('requestor_justification_required');
  }
  public set requestorJustificationRequired(value: boolean | cdktf.IResolvable) {
    this._requestorJustificationRequired = value;
  }
  public resetRequestorJustificationRequired() {
    this._requestorJustificationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestorJustificationRequiredInput() {
    return this._requestorJustificationRequired;
  }

  // approval_stage - computed: false, optional: true, required: false
  private _approvalStage = new AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList(this, "approval_stage", false);
  public get approvalStage() {
    return this._approvalStage;
  }
  public putApprovalStage(value: AccessPackageAssignmentPolicyApprovalSettingsApprovalStage[] | cdktf.IResolvable) {
    this._approvalStage.internalValue = value;
  }
  public resetApprovalStage() {
    this._approvalStage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalStageInput() {
    return this._approvalStage.internalValue;
  }
}
export interface AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer {
  /**
  * For a user in an approval stage, this property indicates whether the user is a backup fallback approver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#backup AccessPackageAssignmentPolicy#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * The object ID of the subject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#object_id AccessPackageAssignmentPolicy#object_id}
  */
  readonly objectId?: string;
  /**
  * Type of users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#subject_type AccessPackageAssignmentPolicy#subject_type}
  */
  readonly subjectType: string;
}

export function accessPackageAssignmentPolicyAssignmentReviewSettingsReviewerToTerraform(struct?: AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: cdktf.booleanToTerraform(struct!.backup),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    subject_type: cdktf.stringToTerraform(struct!.subjectType),
  }
}


export function accessPackageAssignmentPolicyAssignmentReviewSettingsReviewerToHclTerraform(struct?: AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup: {
      value: cdktf.booleanToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_type: {
      value: cdktf.stringToHclTerraform(struct!.subjectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._subjectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectType = this._subjectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backup = undefined;
      this._objectId = undefined;
      this._subjectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backup = value.backup;
      this._objectId = value.objectId;
      this._subjectType = value.subjectType;
    }
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // subject_type - computed: false, optional: false, required: true
  private _subjectType?: string; 
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
  public set subjectType(value: string) {
    this._subjectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTypeInput() {
    return this._subjectType;
  }
}

export class AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList extends cdktf.ComplexList {
  public internalValue? : AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer[] | cdktf.IResolvable

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
  public get(index: number): AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference {
    return new AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPackageAssignmentPolicyAssignmentReviewSettings {
  /**
  * Whether to show Show reviewer decision helpers. If enabled, system recommendations based on users' access information will be shown to the reviewers. The reviewer will be recommended to approve the review if the user has signed-in at least once during the last 30 days. The reviewer will be recommended to deny the review if the user has not signed-in during the last 30 days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#access_recommendation_enabled AccessPackageAssignmentPolicy#access_recommendation_enabled}
  */
  readonly accessRecommendationEnabled?: boolean | cdktf.IResolvable;
  /**
  * What actions the system takes if reviewers don't respond in time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#access_review_timeout_behavior AccessPackageAssignmentPolicy#access_review_timeout_behavior}
  */
  readonly accessReviewTimeoutBehavior?: string;
  /**
  * Whether a reviewer need provide a justification for their decision. Justification is visible to other reviewers and the requestor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#approver_justification_required AccessPackageAssignmentPolicy#approver_justification_required}
  */
  readonly approverJustificationRequired?: boolean | cdktf.IResolvable;
  /**
  * How many days each occurrence of the access review series will run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#duration_in_days AccessPackageAssignmentPolicy#duration_in_days}
  */
  readonly durationInDays?: number;
  /**
  * Whether to enable assignment review
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#enabled AccessPackageAssignmentPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * This will determine how often the access review campaign runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#review_frequency AccessPackageAssignmentPolicy#review_frequency}
  */
  readonly reviewFrequency?: string;
  /**
  * Self review or specific reviewers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#review_type AccessPackageAssignmentPolicy#review_type}
  */
  readonly reviewType?: string;
  /**
  * This is the date the access review campaign will start on, formatted as an RFC3339 date string in UTC(e.g. 2018-01-01T01:02:03Z), default is now. Once an access review has been created, you cannot update its start date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#starting_on AccessPackageAssignmentPolicy#starting_on}
  */
  readonly startingOn?: string;
  /**
  * reviewer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#reviewer AccessPackageAssignmentPolicy#reviewer}
  */
  readonly reviewer?: AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer[] | cdktf.IResolvable;
}

export function accessPackageAssignmentPolicyAssignmentReviewSettingsToTerraform(struct?: AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference | AccessPackageAssignmentPolicyAssignmentReviewSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_recommendation_enabled: cdktf.booleanToTerraform(struct!.accessRecommendationEnabled),
    access_review_timeout_behavior: cdktf.stringToTerraform(struct!.accessReviewTimeoutBehavior),
    approver_justification_required: cdktf.booleanToTerraform(struct!.approverJustificationRequired),
    duration_in_days: cdktf.numberToTerraform(struct!.durationInDays),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    review_frequency: cdktf.stringToTerraform(struct!.reviewFrequency),
    review_type: cdktf.stringToTerraform(struct!.reviewType),
    starting_on: cdktf.stringToTerraform(struct!.startingOn),
    reviewer: cdktf.listMapper(accessPackageAssignmentPolicyAssignmentReviewSettingsReviewerToTerraform, true)(struct!.reviewer),
  }
}


export function accessPackageAssignmentPolicyAssignmentReviewSettingsToHclTerraform(struct?: AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference | AccessPackageAssignmentPolicyAssignmentReviewSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_recommendation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.accessRecommendationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    access_review_timeout_behavior: {
      value: cdktf.stringToHclTerraform(struct!.accessReviewTimeoutBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    approver_justification_required: {
      value: cdktf.booleanToHclTerraform(struct!.approverJustificationRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    duration_in_days: {
      value: cdktf.numberToHclTerraform(struct!.durationInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    review_frequency: {
      value: cdktf.stringToHclTerraform(struct!.reviewFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    review_type: {
      value: cdktf.stringToHclTerraform(struct!.reviewType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_on: {
      value: cdktf.stringToHclTerraform(struct!.startingOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reviewer: {
      value: cdktf.listMapperHcl(accessPackageAssignmentPolicyAssignmentReviewSettingsReviewerToHclTerraform, true)(struct!.reviewer),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessPackageAssignmentPolicyAssignmentReviewSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessRecommendationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRecommendationEnabled = this._accessRecommendationEnabled;
    }
    if (this._accessReviewTimeoutBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessReviewTimeoutBehavior = this._accessReviewTimeoutBehavior;
    }
    if (this._approverJustificationRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.approverJustificationRequired = this._approverJustificationRequired;
    }
    if (this._durationInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInDays = this._durationInDays;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._reviewFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewFrequency = this._reviewFrequency;
    }
    if (this._reviewType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewType = this._reviewType;
    }
    if (this._startingOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingOn = this._startingOn;
    }
    if (this._reviewer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewer = this._reviewer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPackageAssignmentPolicyAssignmentReviewSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessRecommendationEnabled = undefined;
      this._accessReviewTimeoutBehavior = undefined;
      this._approverJustificationRequired = undefined;
      this._durationInDays = undefined;
      this._enabled = undefined;
      this._reviewFrequency = undefined;
      this._reviewType = undefined;
      this._startingOn = undefined;
      this._reviewer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessRecommendationEnabled = value.accessRecommendationEnabled;
      this._accessReviewTimeoutBehavior = value.accessReviewTimeoutBehavior;
      this._approverJustificationRequired = value.approverJustificationRequired;
      this._durationInDays = value.durationInDays;
      this._enabled = value.enabled;
      this._reviewFrequency = value.reviewFrequency;
      this._reviewType = value.reviewType;
      this._startingOn = value.startingOn;
      this._reviewer.internalValue = value.reviewer;
    }
  }

  // access_recommendation_enabled - computed: false, optional: true, required: false
  private _accessRecommendationEnabled?: boolean | cdktf.IResolvable; 
  public get accessRecommendationEnabled() {
    return this.getBooleanAttribute('access_recommendation_enabled');
  }
  public set accessRecommendationEnabled(value: boolean | cdktf.IResolvable) {
    this._accessRecommendationEnabled = value;
  }
  public resetAccessRecommendationEnabled() {
    this._accessRecommendationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRecommendationEnabledInput() {
    return this._accessRecommendationEnabled;
  }

  // access_review_timeout_behavior - computed: false, optional: true, required: false
  private _accessReviewTimeoutBehavior?: string; 
  public get accessReviewTimeoutBehavior() {
    return this.getStringAttribute('access_review_timeout_behavior');
  }
  public set accessReviewTimeoutBehavior(value: string) {
    this._accessReviewTimeoutBehavior = value;
  }
  public resetAccessReviewTimeoutBehavior() {
    this._accessReviewTimeoutBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessReviewTimeoutBehaviorInput() {
    return this._accessReviewTimeoutBehavior;
  }

  // approver_justification_required - computed: false, optional: true, required: false
  private _approverJustificationRequired?: boolean | cdktf.IResolvable; 
  public get approverJustificationRequired() {
    return this.getBooleanAttribute('approver_justification_required');
  }
  public set approverJustificationRequired(value: boolean | cdktf.IResolvable) {
    this._approverJustificationRequired = value;
  }
  public resetApproverJustificationRequired() {
    this._approverJustificationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverJustificationRequiredInput() {
    return this._approverJustificationRequired;
  }

  // duration_in_days - computed: false, optional: true, required: false
  private _durationInDays?: number; 
  public get durationInDays() {
    return this.getNumberAttribute('duration_in_days');
  }
  public set durationInDays(value: number) {
    this._durationInDays = value;
  }
  public resetDurationInDays() {
    this._durationInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInDaysInput() {
    return this._durationInDays;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // review_frequency - computed: false, optional: true, required: false
  private _reviewFrequency?: string; 
  public get reviewFrequency() {
    return this.getStringAttribute('review_frequency');
  }
  public set reviewFrequency(value: string) {
    this._reviewFrequency = value;
  }
  public resetReviewFrequency() {
    this._reviewFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewFrequencyInput() {
    return this._reviewFrequency;
  }

  // review_type - computed: false, optional: true, required: false
  private _reviewType?: string; 
  public get reviewType() {
    return this.getStringAttribute('review_type');
  }
  public set reviewType(value: string) {
    this._reviewType = value;
  }
  public resetReviewType() {
    this._reviewType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewTypeInput() {
    return this._reviewType;
  }

  // starting_on - computed: false, optional: true, required: false
  private _startingOn?: string; 
  public get startingOn() {
    return this.getStringAttribute('starting_on');
  }
  public set startingOn(value: string) {
    this._startingOn = value;
  }
  public resetStartingOn() {
    this._startingOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingOnInput() {
    return this._startingOn;
  }

  // reviewer - computed: false, optional: true, required: false
  private _reviewer = new AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList(this, "reviewer", false);
  public get reviewer() {
    return this._reviewer;
  }
  public putReviewer(value: AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer[] | cdktf.IResolvable) {
    this._reviewer.internalValue = value;
  }
  public resetReviewer() {
    this._reviewer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerInput() {
    return this._reviewer.internalValue;
  }
}
export interface AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText {
  /**
  * The localized content of this question
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#content AccessPackageAssignmentPolicy#content}
  */
  readonly content: string;
  /**
  * The language code of this question content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#language_code AccessPackageAssignmentPolicy#language_code}
  */
  readonly languageCode: string;
}

export function accessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextToTerraform(struct?: AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    language_code: cdktf.stringToTerraform(struct!.languageCode),
  }
}


export function accessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextToHclTerraform(struct?: AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language_code: {
      value: cdktf.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._languageCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._languageCode = value.languageCode;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // language_code - computed: false, optional: false, required: true
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }
}

export class AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList extends cdktf.ComplexList {
  public internalValue? : AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText[] | cdktf.IResolvable

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
  public get(index: number): AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference {
    return new AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPackageAssignmentPolicyQuestionChoiceDisplayValue {
  /**
  * The default text of this question
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#default_text AccessPackageAssignmentPolicy#default_text}
  */
  readonly defaultText: string;
  /**
  * localized_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#localized_text AccessPackageAssignmentPolicy#localized_text}
  */
  readonly localizedText?: AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText[] | cdktf.IResolvable;
}

export function accessPackageAssignmentPolicyQuestionChoiceDisplayValueToTerraform(struct?: AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference | AccessPackageAssignmentPolicyQuestionChoiceDisplayValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_text: cdktf.stringToTerraform(struct!.defaultText),
    localized_text: cdktf.listMapper(accessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextToTerraform, true)(struct!.localizedText),
  }
}


export function accessPackageAssignmentPolicyQuestionChoiceDisplayValueToHclTerraform(struct?: AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference | AccessPackageAssignmentPolicyQuestionChoiceDisplayValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_text: {
      value: cdktf.stringToHclTerraform(struct!.defaultText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    localized_text: {
      value: cdktf.listMapperHcl(accessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextToHclTerraform, true)(struct!.localizedText),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessPackageAssignmentPolicyQuestionChoiceDisplayValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultText !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultText = this._defaultText;
    }
    if (this._localizedText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localizedText = this._localizedText?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPackageAssignmentPolicyQuestionChoiceDisplayValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultText = undefined;
      this._localizedText.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultText = value.defaultText;
      this._localizedText.internalValue = value.localizedText;
    }
  }

  // default_text - computed: false, optional: false, required: true
  private _defaultText?: string; 
  public get defaultText() {
    return this.getStringAttribute('default_text');
  }
  public set defaultText(value: string) {
    this._defaultText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTextInput() {
    return this._defaultText;
  }

  // localized_text - computed: false, optional: true, required: false
  private _localizedText = new AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList(this, "localized_text", false);
  public get localizedText() {
    return this._localizedText;
  }
  public putLocalizedText(value: AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText[] | cdktf.IResolvable) {
    this._localizedText.internalValue = value;
  }
  public resetLocalizedText() {
    this._localizedText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localizedTextInput() {
    return this._localizedText.internalValue;
  }
}
export interface AccessPackageAssignmentPolicyQuestionChoice {
  /**
  * The actual value of this choice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#actual_value AccessPackageAssignmentPolicy#actual_value}
  */
  readonly actualValue: string;
  /**
  * display_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#display_value AccessPackageAssignmentPolicy#display_value}
  */
  readonly displayValue: AccessPackageAssignmentPolicyQuestionChoiceDisplayValue;
}

export function accessPackageAssignmentPolicyQuestionChoiceToTerraform(struct?: AccessPackageAssignmentPolicyQuestionChoice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actual_value: cdktf.stringToTerraform(struct!.actualValue),
    display_value: accessPackageAssignmentPolicyQuestionChoiceDisplayValueToTerraform(struct!.displayValue),
  }
}


export function accessPackageAssignmentPolicyQuestionChoiceToHclTerraform(struct?: AccessPackageAssignmentPolicyQuestionChoice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actual_value: {
      value: cdktf.stringToHclTerraform(struct!.actualValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_value: {
      value: accessPackageAssignmentPolicyQuestionChoiceDisplayValueToHclTerraform(struct!.displayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPackageAssignmentPolicyQuestionChoiceDisplayValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPackageAssignmentPolicyQuestionChoiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPackageAssignmentPolicyQuestionChoice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actualValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actualValue = this._actualValue;
    }
    if (this._displayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayValue = this._displayValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPackageAssignmentPolicyQuestionChoice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actualValue = undefined;
      this._displayValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actualValue = value.actualValue;
      this._displayValue.internalValue = value.displayValue;
    }
  }

  // actual_value - computed: false, optional: false, required: true
  private _actualValue?: string; 
  public get actualValue() {
    return this.getStringAttribute('actual_value');
  }
  public set actualValue(value: string) {
    this._actualValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actualValueInput() {
    return this._actualValue;
  }

  // display_value - computed: false, optional: false, required: true
  private _displayValue = new AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference(this, "display_value");
  public get displayValue() {
    return this._displayValue;
  }
  public putDisplayValue(value: AccessPackageAssignmentPolicyQuestionChoiceDisplayValue) {
    this._displayValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayValueInput() {
    return this._displayValue.internalValue;
  }
}

export class AccessPackageAssignmentPolicyQuestionChoiceList extends cdktf.ComplexList {
  public internalValue? : AccessPackageAssignmentPolicyQuestionChoice[] | cdktf.IResolvable

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
  public get(index: number): AccessPackageAssignmentPolicyQuestionChoiceOutputReference {
    return new AccessPackageAssignmentPolicyQuestionChoiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPackageAssignmentPolicyQuestionTextLocalizedText {
  /**
  * The localized content of this question
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#content AccessPackageAssignmentPolicy#content}
  */
  readonly content: string;
  /**
  * The language code of this question content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#language_code AccessPackageAssignmentPolicy#language_code}
  */
  readonly languageCode: string;
}

export function accessPackageAssignmentPolicyQuestionTextLocalizedTextToTerraform(struct?: AccessPackageAssignmentPolicyQuestionTextLocalizedText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    language_code: cdktf.stringToTerraform(struct!.languageCode),
  }
}


export function accessPackageAssignmentPolicyQuestionTextLocalizedTextToHclTerraform(struct?: AccessPackageAssignmentPolicyQuestionTextLocalizedText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language_code: {
      value: cdktf.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPackageAssignmentPolicyQuestionTextLocalizedText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPackageAssignmentPolicyQuestionTextLocalizedText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._languageCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._languageCode = value.languageCode;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // language_code - computed: false, optional: false, required: true
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }
}

export class AccessPackageAssignmentPolicyQuestionTextLocalizedTextList extends cdktf.ComplexList {
  public internalValue? : AccessPackageAssignmentPolicyQuestionTextLocalizedText[] | cdktf.IResolvable

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
  public get(index: number): AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference {
    return new AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPackageAssignmentPolicyQuestionText {
  /**
  * The default text of this question
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#default_text AccessPackageAssignmentPolicy#default_text}
  */
  readonly defaultText: string;
  /**
  * localized_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#localized_text AccessPackageAssignmentPolicy#localized_text}
  */
  readonly localizedText?: AccessPackageAssignmentPolicyQuestionTextLocalizedText[] | cdktf.IResolvable;
}

export function accessPackageAssignmentPolicyQuestionTextToTerraform(struct?: AccessPackageAssignmentPolicyQuestionTextOutputReference | AccessPackageAssignmentPolicyQuestionText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_text: cdktf.stringToTerraform(struct!.defaultText),
    localized_text: cdktf.listMapper(accessPackageAssignmentPolicyQuestionTextLocalizedTextToTerraform, true)(struct!.localizedText),
  }
}


export function accessPackageAssignmentPolicyQuestionTextToHclTerraform(struct?: AccessPackageAssignmentPolicyQuestionTextOutputReference | AccessPackageAssignmentPolicyQuestionText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_text: {
      value: cdktf.stringToHclTerraform(struct!.defaultText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    localized_text: {
      value: cdktf.listMapperHcl(accessPackageAssignmentPolicyQuestionTextLocalizedTextToHclTerraform, true)(struct!.localizedText),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPackageAssignmentPolicyQuestionTextLocalizedTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPackageAssignmentPolicyQuestionTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessPackageAssignmentPolicyQuestionText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultText !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultText = this._defaultText;
    }
    if (this._localizedText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localizedText = this._localizedText?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPackageAssignmentPolicyQuestionText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultText = undefined;
      this._localizedText.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultText = value.defaultText;
      this._localizedText.internalValue = value.localizedText;
    }
  }

  // default_text - computed: false, optional: false, required: true
  private _defaultText?: string; 
  public get defaultText() {
    return this.getStringAttribute('default_text');
  }
  public set defaultText(value: string) {
    this._defaultText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTextInput() {
    return this._defaultText;
  }

  // localized_text - computed: false, optional: true, required: false
  private _localizedText = new AccessPackageAssignmentPolicyQuestionTextLocalizedTextList(this, "localized_text", false);
  public get localizedText() {
    return this._localizedText;
  }
  public putLocalizedText(value: AccessPackageAssignmentPolicyQuestionTextLocalizedText[] | cdktf.IResolvable) {
    this._localizedText.internalValue = value;
  }
  public resetLocalizedText() {
    this._localizedText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localizedTextInput() {
    return this._localizedText.internalValue;
  }
}
export interface AccessPackageAssignmentPolicyQuestion {
  /**
  * Whether this question is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#required AccessPackageAssignmentPolicy#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The sequence number of this question
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#sequence AccessPackageAssignmentPolicy#sequence}
  */
  readonly sequence?: number;
  /**
  * choice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#choice AccessPackageAssignmentPolicy#choice}
  */
  readonly choice?: AccessPackageAssignmentPolicyQuestionChoice[] | cdktf.IResolvable;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#text AccessPackageAssignmentPolicy#text}
  */
  readonly text: AccessPackageAssignmentPolicyQuestionText;
}

export function accessPackageAssignmentPolicyQuestionToTerraform(struct?: AccessPackageAssignmentPolicyQuestion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required: cdktf.booleanToTerraform(struct!.required),
    sequence: cdktf.numberToTerraform(struct!.sequence),
    choice: cdktf.listMapper(accessPackageAssignmentPolicyQuestionChoiceToTerraform, true)(struct!.choice),
    text: accessPackageAssignmentPolicyQuestionTextToTerraform(struct!.text),
  }
}


export function accessPackageAssignmentPolicyQuestionToHclTerraform(struct?: AccessPackageAssignmentPolicyQuestion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sequence: {
      value: cdktf.numberToHclTerraform(struct!.sequence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    choice: {
      value: cdktf.listMapperHcl(accessPackageAssignmentPolicyQuestionChoiceToHclTerraform, true)(struct!.choice),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPackageAssignmentPolicyQuestionChoiceList",
    },
    text: {
      value: accessPackageAssignmentPolicyQuestionTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPackageAssignmentPolicyQuestionTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPackageAssignmentPolicyQuestionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPackageAssignmentPolicyQuestion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequence = this._sequence;
    }
    if (this._choice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.choice = this._choice?.internalValue;
    }
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPackageAssignmentPolicyQuestion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._required = undefined;
      this._sequence = undefined;
      this._choice.internalValue = undefined;
      this._text.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._required = value.required;
      this._sequence = value.sequence;
      this._choice.internalValue = value.choice;
      this._text.internalValue = value.text;
    }
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sequence - computed: false, optional: true, required: false
  private _sequence?: number; 
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }
  public set sequence(value: number) {
    this._sequence = value;
  }
  public resetSequence() {
    this._sequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // choice - computed: false, optional: true, required: false
  private _choice = new AccessPackageAssignmentPolicyQuestionChoiceList(this, "choice", false);
  public get choice() {
    return this._choice;
  }
  public putChoice(value: AccessPackageAssignmentPolicyQuestionChoice[] | cdktf.IResolvable) {
    this._choice.internalValue = value;
  }
  public resetChoice() {
    this._choice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get choiceInput() {
    return this._choice.internalValue;
  }

  // text - computed: false, optional: false, required: true
  private _text = new AccessPackageAssignmentPolicyQuestionTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: AccessPackageAssignmentPolicyQuestionText) {
    this._text.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}

export class AccessPackageAssignmentPolicyQuestionList extends cdktf.ComplexList {
  public internalValue? : AccessPackageAssignmentPolicyQuestion[] | cdktf.IResolvable

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
  public get(index: number): AccessPackageAssignmentPolicyQuestionOutputReference {
    return new AccessPackageAssignmentPolicyQuestionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPackageAssignmentPolicyRequestorSettingsRequestor {
  /**
  * For a user in an approval stage, this property indicates whether the user is a backup fallback approver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#backup AccessPackageAssignmentPolicy#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * The object ID of the subject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#object_id AccessPackageAssignmentPolicy#object_id}
  */
  readonly objectId?: string;
  /**
  * Type of users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#subject_type AccessPackageAssignmentPolicy#subject_type}
  */
  readonly subjectType: string;
}

export function accessPackageAssignmentPolicyRequestorSettingsRequestorToTerraform(struct?: AccessPackageAssignmentPolicyRequestorSettingsRequestor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: cdktf.booleanToTerraform(struct!.backup),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    subject_type: cdktf.stringToTerraform(struct!.subjectType),
  }
}


export function accessPackageAssignmentPolicyRequestorSettingsRequestorToHclTerraform(struct?: AccessPackageAssignmentPolicyRequestorSettingsRequestor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup: {
      value: cdktf.booleanToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_type: {
      value: cdktf.stringToHclTerraform(struct!.subjectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessPackageAssignmentPolicyRequestorSettingsRequestor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._subjectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectType = this._subjectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPackageAssignmentPolicyRequestorSettingsRequestor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backup = undefined;
      this._objectId = undefined;
      this._subjectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backup = value.backup;
      this._objectId = value.objectId;
      this._subjectType = value.subjectType;
    }
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // subject_type - computed: false, optional: false, required: true
  private _subjectType?: string; 
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
  public set subjectType(value: string) {
    this._subjectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTypeInput() {
    return this._subjectType;
  }
}

export class AccessPackageAssignmentPolicyRequestorSettingsRequestorList extends cdktf.ComplexList {
  public internalValue? : AccessPackageAssignmentPolicyRequestorSettingsRequestor[] | cdktf.IResolvable

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
  public get(index: number): AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference {
    return new AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessPackageAssignmentPolicyRequestorSettings {
  /**
  * Whether to accept requests now, when disabled, no new requests can be made using this policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#requests_accepted AccessPackageAssignmentPolicy#requests_accepted}
  */
  readonly requestsAccepted?: boolean | cdktf.IResolvable;
  /**
  * Specify the scopes of the requestors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#scope_type AccessPackageAssignmentPolicy#scope_type}
  */
  readonly scopeType?: string;
  /**
  * requestor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#requestor AccessPackageAssignmentPolicy#requestor}
  */
  readonly requestor?: AccessPackageAssignmentPolicyRequestorSettingsRequestor[] | cdktf.IResolvable;
}

export function accessPackageAssignmentPolicyRequestorSettingsToTerraform(struct?: AccessPackageAssignmentPolicyRequestorSettingsOutputReference | AccessPackageAssignmentPolicyRequestorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    requests_accepted: cdktf.booleanToTerraform(struct!.requestsAccepted),
    scope_type: cdktf.stringToTerraform(struct!.scopeType),
    requestor: cdktf.listMapper(accessPackageAssignmentPolicyRequestorSettingsRequestorToTerraform, true)(struct!.requestor),
  }
}


export function accessPackageAssignmentPolicyRequestorSettingsToHclTerraform(struct?: AccessPackageAssignmentPolicyRequestorSettingsOutputReference | AccessPackageAssignmentPolicyRequestorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    requests_accepted: {
      value: cdktf.booleanToHclTerraform(struct!.requestsAccepted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scope_type: {
      value: cdktf.stringToHclTerraform(struct!.scopeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requestor: {
      value: cdktf.listMapperHcl(accessPackageAssignmentPolicyRequestorSettingsRequestorToHclTerraform, true)(struct!.requestor),
      isBlock: true,
      type: "list",
      storageClassType: "AccessPackageAssignmentPolicyRequestorSettingsRequestorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPackageAssignmentPolicyRequestorSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessPackageAssignmentPolicyRequestorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestsAccepted !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsAccepted = this._requestsAccepted;
    }
    if (this._scopeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeType = this._scopeType;
    }
    if (this._requestor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestor = this._requestor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPackageAssignmentPolicyRequestorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestsAccepted = undefined;
      this._scopeType = undefined;
      this._requestor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestsAccepted = value.requestsAccepted;
      this._scopeType = value.scopeType;
      this._requestor.internalValue = value.requestor;
    }
  }

  // requests_accepted - computed: false, optional: true, required: false
  private _requestsAccepted?: boolean | cdktf.IResolvable; 
  public get requestsAccepted() {
    return this.getBooleanAttribute('requests_accepted');
  }
  public set requestsAccepted(value: boolean | cdktf.IResolvable) {
    this._requestsAccepted = value;
  }
  public resetRequestsAccepted() {
    this._requestsAccepted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsAcceptedInput() {
    return this._requestsAccepted;
  }

  // scope_type - computed: false, optional: true, required: false
  private _scopeType?: string; 
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }
  public set scopeType(value: string) {
    this._scopeType = value;
  }
  public resetScopeType() {
    this._scopeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeTypeInput() {
    return this._scopeType;
  }

  // requestor - computed: false, optional: true, required: false
  private _requestor = new AccessPackageAssignmentPolicyRequestorSettingsRequestorList(this, "requestor", false);
  public get requestor() {
    return this._requestor;
  }
  public putRequestor(value: AccessPackageAssignmentPolicyRequestorSettingsRequestor[] | cdktf.IResolvable) {
    this._requestor.internalValue = value;
  }
  public resetRequestor() {
    this._requestor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestorInput() {
    return this._requestor.internalValue;
  }
}
export interface AccessPackageAssignmentPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#create AccessPackageAssignmentPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#delete AccessPackageAssignmentPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#read AccessPackageAssignmentPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#update AccessPackageAssignmentPolicy#update}
  */
  readonly update?: string;
}

export function accessPackageAssignmentPolicyTimeoutsToTerraform(struct?: AccessPackageAssignmentPolicyTimeouts | cdktf.IResolvable): any {
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


export function accessPackageAssignmentPolicyTimeoutsToHclTerraform(struct?: AccessPackageAssignmentPolicyTimeouts | cdktf.IResolvable): any {
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

export class AccessPackageAssignmentPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessPackageAssignmentPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPackageAssignmentPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy azuread_access_package_assignment_policy}
*/
export class AccessPackageAssignmentPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_access_package_assignment_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessPackageAssignmentPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessPackageAssignmentPolicy to import
  * @param importFromId The id of the existing AccessPackageAssignmentPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessPackageAssignmentPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_access_package_assignment_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/access_package_assignment_policy azuread_access_package_assignment_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessPackageAssignmentPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AccessPackageAssignmentPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_access_package_assignment_policy',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.49.0',
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
    this._accessPackageId = config.accessPackageId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._durationInDays = config.durationInDays;
    this._expirationDate = config.expirationDate;
    this._extensionEnabled = config.extensionEnabled;
    this._id = config.id;
    this._approvalSettings.internalValue = config.approvalSettings;
    this._assignmentReviewSettings.internalValue = config.assignmentReviewSettings;
    this._question.internalValue = config.question;
    this._requestorSettings.internalValue = config.requestorSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_package_id - computed: false, optional: false, required: true
  private _accessPackageId?: string; 
  public get accessPackageId() {
    return this.getStringAttribute('access_package_id');
  }
  public set accessPackageId(value: string) {
    this._accessPackageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPackageIdInput() {
    return this._accessPackageId;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

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

  // duration_in_days - computed: false, optional: true, required: false
  private _durationInDays?: number; 
  public get durationInDays() {
    return this.getNumberAttribute('duration_in_days');
  }
  public set durationInDays(value: number) {
    this._durationInDays = value;
  }
  public resetDurationInDays() {
    this._durationInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInDaysInput() {
    return this._durationInDays;
  }

  // expiration_date - computed: false, optional: true, required: false
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
  }

  // extension_enabled - computed: false, optional: true, required: false
  private _extensionEnabled?: boolean | cdktf.IResolvable; 
  public get extensionEnabled() {
    return this.getBooleanAttribute('extension_enabled');
  }
  public set extensionEnabled(value: boolean | cdktf.IResolvable) {
    this._extensionEnabled = value;
  }
  public resetExtensionEnabled() {
    this._extensionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionEnabledInput() {
    return this._extensionEnabled;
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

  // approval_settings - computed: false, optional: true, required: false
  private _approvalSettings = new AccessPackageAssignmentPolicyApprovalSettingsOutputReference(this, "approval_settings");
  public get approvalSettings() {
    return this._approvalSettings;
  }
  public putApprovalSettings(value: AccessPackageAssignmentPolicyApprovalSettings) {
    this._approvalSettings.internalValue = value;
  }
  public resetApprovalSettings() {
    this._approvalSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalSettingsInput() {
    return this._approvalSettings.internalValue;
  }

  // assignment_review_settings - computed: false, optional: true, required: false
  private _assignmentReviewSettings = new AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference(this, "assignment_review_settings");
  public get assignmentReviewSettings() {
    return this._assignmentReviewSettings;
  }
  public putAssignmentReviewSettings(value: AccessPackageAssignmentPolicyAssignmentReviewSettings) {
    this._assignmentReviewSettings.internalValue = value;
  }
  public resetAssignmentReviewSettings() {
    this._assignmentReviewSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentReviewSettingsInput() {
    return this._assignmentReviewSettings.internalValue;
  }

  // question - computed: false, optional: true, required: false
  private _question = new AccessPackageAssignmentPolicyQuestionList(this, "question", false);
  public get question() {
    return this._question;
  }
  public putQuestion(value: AccessPackageAssignmentPolicyQuestion[] | cdktf.IResolvable) {
    this._question.internalValue = value;
  }
  public resetQuestion() {
    this._question.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get questionInput() {
    return this._question.internalValue;
  }

  // requestor_settings - computed: false, optional: true, required: false
  private _requestorSettings = new AccessPackageAssignmentPolicyRequestorSettingsOutputReference(this, "requestor_settings");
  public get requestorSettings() {
    return this._requestorSettings;
  }
  public putRequestorSettings(value: AccessPackageAssignmentPolicyRequestorSettings) {
    this._requestorSettings.internalValue = value;
  }
  public resetRequestorSettings() {
    this._requestorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestorSettingsInput() {
    return this._requestorSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccessPackageAssignmentPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccessPackageAssignmentPolicyTimeouts) {
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
      access_package_id: cdktf.stringToTerraform(this._accessPackageId),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      duration_in_days: cdktf.numberToTerraform(this._durationInDays),
      expiration_date: cdktf.stringToTerraform(this._expirationDate),
      extension_enabled: cdktf.booleanToTerraform(this._extensionEnabled),
      id: cdktf.stringToTerraform(this._id),
      approval_settings: accessPackageAssignmentPolicyApprovalSettingsToTerraform(this._approvalSettings.internalValue),
      assignment_review_settings: accessPackageAssignmentPolicyAssignmentReviewSettingsToTerraform(this._assignmentReviewSettings.internalValue),
      question: cdktf.listMapper(accessPackageAssignmentPolicyQuestionToTerraform, true)(this._question.internalValue),
      requestor_settings: accessPackageAssignmentPolicyRequestorSettingsToTerraform(this._requestorSettings.internalValue),
      timeouts: accessPackageAssignmentPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_package_id: {
        value: cdktf.stringToHclTerraform(this._accessPackageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration_in_days: {
        value: cdktf.numberToHclTerraform(this._durationInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expiration_date: {
        value: cdktf.stringToHclTerraform(this._expirationDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_enabled: {
        value: cdktf.booleanToHclTerraform(this._extensionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approval_settings: {
        value: accessPackageAssignmentPolicyApprovalSettingsToHclTerraform(this._approvalSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessPackageAssignmentPolicyApprovalSettingsList",
      },
      assignment_review_settings: {
        value: accessPackageAssignmentPolicyAssignmentReviewSettingsToHclTerraform(this._assignmentReviewSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessPackageAssignmentPolicyAssignmentReviewSettingsList",
      },
      question: {
        value: cdktf.listMapperHcl(accessPackageAssignmentPolicyQuestionToHclTerraform, true)(this._question.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessPackageAssignmentPolicyQuestionList",
      },
      requestor_settings: {
        value: accessPackageAssignmentPolicyRequestorSettingsToHclTerraform(this._requestorSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessPackageAssignmentPolicyRequestorSettingsList",
      },
      timeouts: {
        value: accessPackageAssignmentPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccessPackageAssignmentPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
