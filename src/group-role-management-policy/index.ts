// https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupRoleManagementPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the group to which this policy is assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#group_id GroupRoleManagementPolicy#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#id GroupRoleManagementPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the role of this policy to the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#role_id GroupRoleManagementPolicy#role_id}
  */
  readonly roleId: string;
  /**
  * activation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#activation_rules GroupRoleManagementPolicy#activation_rules}
  */
  readonly activationRules?: GroupRoleManagementPolicyActivationRules;
  /**
  * active_assignment_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#active_assignment_rules GroupRoleManagementPolicy#active_assignment_rules}
  */
  readonly activeAssignmentRules?: GroupRoleManagementPolicyActiveAssignmentRules;
  /**
  * eligible_assignment_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#eligible_assignment_rules GroupRoleManagementPolicy#eligible_assignment_rules}
  */
  readonly eligibleAssignmentRules?: GroupRoleManagementPolicyEligibleAssignmentRules;
  /**
  * notification_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#notification_rules GroupRoleManagementPolicy#notification_rules}
  */
  readonly notificationRules?: GroupRoleManagementPolicyNotificationRules;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#timeouts GroupRoleManagementPolicy#timeouts}
  */
  readonly timeouts?: GroupRoleManagementPolicyTimeouts;
}
export interface GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover {
  /**
  * The ID of the object to act as an approver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#object_id GroupRoleManagementPolicy#object_id}
  */
  readonly objectId: string;
  /**
  * The type of object acting as an approver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#type GroupRoleManagementPolicy#type}
  */
  readonly type?: string;
}

export function groupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverToTerraform(struct?: GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id: cdktf.stringToTerraform(struct!.objectId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function groupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverToHclTerraform(struct?: GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectId = value.objectId;
      this._type = value.type;
    }
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList extends cdktf.ComplexList {
  public internalValue? : GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover[] | cdktf.IResolvable

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
  public get(index: number): GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference {
    return new GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupRoleManagementPolicyActivationRulesApprovalStage {
  /**
  * primary_approver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#primary_approver GroupRoleManagementPolicy#primary_approver}
  */
  readonly primaryApprover: GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover[] | cdktf.IResolvable;
}

export function groupRoleManagementPolicyActivationRulesApprovalStageToTerraform(struct?: GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference | GroupRoleManagementPolicyActivationRulesApprovalStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_approver: cdktf.listMapper(groupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverToTerraform, true)(struct!.primaryApprover),
  }
}


export function groupRoleManagementPolicyActivationRulesApprovalStageToHclTerraform(struct?: GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference | GroupRoleManagementPolicyActivationRulesApprovalStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_approver: {
      value: cdktf.listMapperHcl(groupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverToHclTerraform, true)(struct!.primaryApprover),
      isBlock: true,
      type: "set",
      storageClassType: "GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyActivationRulesApprovalStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryApprover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryApprover = this._primaryApprover?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyActivationRulesApprovalStage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primaryApprover.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primaryApprover.internalValue = value.primaryApprover;
    }
  }

  // primary_approver - computed: false, optional: false, required: true
  private _primaryApprover = new GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList(this, "primary_approver", true);
  public get primaryApprover() {
    return this._primaryApprover;
  }
  public putPrimaryApprover(value: GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover[] | cdktf.IResolvable) {
    this._primaryApprover.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryApproverInput() {
    return this._primaryApprover.internalValue;
  }
}
export interface GroupRoleManagementPolicyActivationRules {
  /**
  * The time after which the an activation can be valid for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#maximum_duration GroupRoleManagementPolicy#maximum_duration}
  */
  readonly maximumDuration?: string;
  /**
  * Whether an approval is required for activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#require_approval GroupRoleManagementPolicy#require_approval}
  */
  readonly requireApproval?: boolean | cdktf.IResolvable;
  /**
  * Whether a justification is required during activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#require_justification GroupRoleManagementPolicy#require_justification}
  */
  readonly requireJustification?: boolean | cdktf.IResolvable;
  /**
  * Whether multi-factor authentication is required during activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#require_multifactor_authentication GroupRoleManagementPolicy#require_multifactor_authentication}
  */
  readonly requireMultifactorAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Whether ticket information is required during activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#require_ticket_info GroupRoleManagementPolicy#require_ticket_info}
  */
  readonly requireTicketInfo?: boolean | cdktf.IResolvable;
  /**
  * Whether a conditional access context is required during activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#required_conditional_access_authentication_context GroupRoleManagementPolicy#required_conditional_access_authentication_context}
  */
  readonly requiredConditionalAccessAuthenticationContext?: string;
  /**
  * approval_stage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#approval_stage GroupRoleManagementPolicy#approval_stage}
  */
  readonly approvalStage?: GroupRoleManagementPolicyActivationRulesApprovalStage;
}

export function groupRoleManagementPolicyActivationRulesToTerraform(struct?: GroupRoleManagementPolicyActivationRulesOutputReference | GroupRoleManagementPolicyActivationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_duration: cdktf.stringToTerraform(struct!.maximumDuration),
    require_approval: cdktf.booleanToTerraform(struct!.requireApproval),
    require_justification: cdktf.booleanToTerraform(struct!.requireJustification),
    require_multifactor_authentication: cdktf.booleanToTerraform(struct!.requireMultifactorAuthentication),
    require_ticket_info: cdktf.booleanToTerraform(struct!.requireTicketInfo),
    required_conditional_access_authentication_context: cdktf.stringToTerraform(struct!.requiredConditionalAccessAuthenticationContext),
    approval_stage: groupRoleManagementPolicyActivationRulesApprovalStageToTerraform(struct!.approvalStage),
  }
}


export function groupRoleManagementPolicyActivationRulesToHclTerraform(struct?: GroupRoleManagementPolicyActivationRulesOutputReference | GroupRoleManagementPolicyActivationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_duration: {
      value: cdktf.stringToHclTerraform(struct!.maximumDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_approval: {
      value: cdktf.booleanToHclTerraform(struct!.requireApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_justification: {
      value: cdktf.booleanToHclTerraform(struct!.requireJustification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_multifactor_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.requireMultifactorAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_ticket_info: {
      value: cdktf.booleanToHclTerraform(struct!.requireTicketInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_conditional_access_authentication_context: {
      value: cdktf.stringToHclTerraform(struct!.requiredConditionalAccessAuthenticationContext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    approval_stage: {
      value: groupRoleManagementPolicyActivationRulesApprovalStageToHclTerraform(struct!.approvalStage),
      isBlock: true,
      type: "list",
      storageClassType: "GroupRoleManagementPolicyActivationRulesApprovalStageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyActivationRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyActivationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumDuration = this._maximumDuration;
    }
    if (this._requireApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireApproval = this._requireApproval;
    }
    if (this._requireJustification !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireJustification = this._requireJustification;
    }
    if (this._requireMultifactorAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireMultifactorAuthentication = this._requireMultifactorAuthentication;
    }
    if (this._requireTicketInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireTicketInfo = this._requireTicketInfo;
    }
    if (this._requiredConditionalAccessAuthenticationContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredConditionalAccessAuthenticationContext = this._requiredConditionalAccessAuthenticationContext;
    }
    if (this._approvalStage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalStage = this._approvalStage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyActivationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumDuration = undefined;
      this._requireApproval = undefined;
      this._requireJustification = undefined;
      this._requireMultifactorAuthentication = undefined;
      this._requireTicketInfo = undefined;
      this._requiredConditionalAccessAuthenticationContext = undefined;
      this._approvalStage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumDuration = value.maximumDuration;
      this._requireApproval = value.requireApproval;
      this._requireJustification = value.requireJustification;
      this._requireMultifactorAuthentication = value.requireMultifactorAuthentication;
      this._requireTicketInfo = value.requireTicketInfo;
      this._requiredConditionalAccessAuthenticationContext = value.requiredConditionalAccessAuthenticationContext;
      this._approvalStage.internalValue = value.approvalStage;
    }
  }

  // maximum_duration - computed: true, optional: true, required: false
  private _maximumDuration?: string; 
  public get maximumDuration() {
    return this.getStringAttribute('maximum_duration');
  }
  public set maximumDuration(value: string) {
    this._maximumDuration = value;
  }
  public resetMaximumDuration() {
    this._maximumDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumDurationInput() {
    return this._maximumDuration;
  }

  // require_approval - computed: true, optional: true, required: false
  private _requireApproval?: boolean | cdktf.IResolvable; 
  public get requireApproval() {
    return this.getBooleanAttribute('require_approval');
  }
  public set requireApproval(value: boolean | cdktf.IResolvable) {
    this._requireApproval = value;
  }
  public resetRequireApproval() {
    this._requireApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireApprovalInput() {
    return this._requireApproval;
  }

  // require_justification - computed: true, optional: true, required: false
  private _requireJustification?: boolean | cdktf.IResolvable; 
  public get requireJustification() {
    return this.getBooleanAttribute('require_justification');
  }
  public set requireJustification(value: boolean | cdktf.IResolvable) {
    this._requireJustification = value;
  }
  public resetRequireJustification() {
    this._requireJustification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireJustificationInput() {
    return this._requireJustification;
  }

  // require_multifactor_authentication - computed: true, optional: true, required: false
  private _requireMultifactorAuthentication?: boolean | cdktf.IResolvable; 
  public get requireMultifactorAuthentication() {
    return this.getBooleanAttribute('require_multifactor_authentication');
  }
  public set requireMultifactorAuthentication(value: boolean | cdktf.IResolvable) {
    this._requireMultifactorAuthentication = value;
  }
  public resetRequireMultifactorAuthentication() {
    this._requireMultifactorAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMultifactorAuthenticationInput() {
    return this._requireMultifactorAuthentication;
  }

  // require_ticket_info - computed: true, optional: true, required: false
  private _requireTicketInfo?: boolean | cdktf.IResolvable; 
  public get requireTicketInfo() {
    return this.getBooleanAttribute('require_ticket_info');
  }
  public set requireTicketInfo(value: boolean | cdktf.IResolvable) {
    this._requireTicketInfo = value;
  }
  public resetRequireTicketInfo() {
    this._requireTicketInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTicketInfoInput() {
    return this._requireTicketInfo;
  }

  // required_conditional_access_authentication_context - computed: true, optional: true, required: false
  private _requiredConditionalAccessAuthenticationContext?: string; 
  public get requiredConditionalAccessAuthenticationContext() {
    return this.getStringAttribute('required_conditional_access_authentication_context');
  }
  public set requiredConditionalAccessAuthenticationContext(value: string) {
    this._requiredConditionalAccessAuthenticationContext = value;
  }
  public resetRequiredConditionalAccessAuthenticationContext() {
    this._requiredConditionalAccessAuthenticationContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredConditionalAccessAuthenticationContextInput() {
    return this._requiredConditionalAccessAuthenticationContext;
  }

  // approval_stage - computed: false, optional: true, required: false
  private _approvalStage = new GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference(this, "approval_stage");
  public get approvalStage() {
    return this._approvalStage;
  }
  public putApprovalStage(value: GroupRoleManagementPolicyActivationRulesApprovalStage) {
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
export interface GroupRoleManagementPolicyActiveAssignmentRules {
  /**
  * Must the assignment have an expiry date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#expiration_required GroupRoleManagementPolicy#expiration_required}
  */
  readonly expirationRequired?: boolean | cdktf.IResolvable;
  /**
  * The duration after which assignments expire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#expire_after GroupRoleManagementPolicy#expire_after}
  */
  readonly expireAfter?: string;
  /**
  * Whether a justification is required to make an assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#require_justification GroupRoleManagementPolicy#require_justification}
  */
  readonly requireJustification?: boolean | cdktf.IResolvable;
  /**
  * Whether multi-factor authentication is required to make an assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#require_multifactor_authentication GroupRoleManagementPolicy#require_multifactor_authentication}
  */
  readonly requireMultifactorAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Whether ticket information is required to make an assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#require_ticket_info GroupRoleManagementPolicy#require_ticket_info}
  */
  readonly requireTicketInfo?: boolean | cdktf.IResolvable;
}

export function groupRoleManagementPolicyActiveAssignmentRulesToTerraform(struct?: GroupRoleManagementPolicyActiveAssignmentRulesOutputReference | GroupRoleManagementPolicyActiveAssignmentRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_required: cdktf.booleanToTerraform(struct!.expirationRequired),
    expire_after: cdktf.stringToTerraform(struct!.expireAfter),
    require_justification: cdktf.booleanToTerraform(struct!.requireJustification),
    require_multifactor_authentication: cdktf.booleanToTerraform(struct!.requireMultifactorAuthentication),
    require_ticket_info: cdktf.booleanToTerraform(struct!.requireTicketInfo),
  }
}


export function groupRoleManagementPolicyActiveAssignmentRulesToHclTerraform(struct?: GroupRoleManagementPolicyActiveAssignmentRulesOutputReference | GroupRoleManagementPolicyActiveAssignmentRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_required: {
      value: cdktf.booleanToHclTerraform(struct!.expirationRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expire_after: {
      value: cdktf.stringToHclTerraform(struct!.expireAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_justification: {
      value: cdktf.booleanToHclTerraform(struct!.requireJustification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_multifactor_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.requireMultifactorAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_ticket_info: {
      value: cdktf.booleanToHclTerraform(struct!.requireTicketInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyActiveAssignmentRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyActiveAssignmentRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationRequired = this._expirationRequired;
    }
    if (this._expireAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireAfter = this._expireAfter;
    }
    if (this._requireJustification !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireJustification = this._requireJustification;
    }
    if (this._requireMultifactorAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireMultifactorAuthentication = this._requireMultifactorAuthentication;
    }
    if (this._requireTicketInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireTicketInfo = this._requireTicketInfo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyActiveAssignmentRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationRequired = undefined;
      this._expireAfter = undefined;
      this._requireJustification = undefined;
      this._requireMultifactorAuthentication = undefined;
      this._requireTicketInfo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationRequired = value.expirationRequired;
      this._expireAfter = value.expireAfter;
      this._requireJustification = value.requireJustification;
      this._requireMultifactorAuthentication = value.requireMultifactorAuthentication;
      this._requireTicketInfo = value.requireTicketInfo;
    }
  }

  // expiration_required - computed: true, optional: true, required: false
  private _expirationRequired?: boolean | cdktf.IResolvable; 
  public get expirationRequired() {
    return this.getBooleanAttribute('expiration_required');
  }
  public set expirationRequired(value: boolean | cdktf.IResolvable) {
    this._expirationRequired = value;
  }
  public resetExpirationRequired() {
    this._expirationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationRequiredInput() {
    return this._expirationRequired;
  }

  // expire_after - computed: true, optional: true, required: false
  private _expireAfter?: string; 
  public get expireAfter() {
    return this.getStringAttribute('expire_after');
  }
  public set expireAfter(value: string) {
    this._expireAfter = value;
  }
  public resetExpireAfter() {
    this._expireAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireAfterInput() {
    return this._expireAfter;
  }

  // require_justification - computed: true, optional: true, required: false
  private _requireJustification?: boolean | cdktf.IResolvable; 
  public get requireJustification() {
    return this.getBooleanAttribute('require_justification');
  }
  public set requireJustification(value: boolean | cdktf.IResolvable) {
    this._requireJustification = value;
  }
  public resetRequireJustification() {
    this._requireJustification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireJustificationInput() {
    return this._requireJustification;
  }

  // require_multifactor_authentication - computed: true, optional: true, required: false
  private _requireMultifactorAuthentication?: boolean | cdktf.IResolvable; 
  public get requireMultifactorAuthentication() {
    return this.getBooleanAttribute('require_multifactor_authentication');
  }
  public set requireMultifactorAuthentication(value: boolean | cdktf.IResolvable) {
    this._requireMultifactorAuthentication = value;
  }
  public resetRequireMultifactorAuthentication() {
    this._requireMultifactorAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMultifactorAuthenticationInput() {
    return this._requireMultifactorAuthentication;
  }

  // require_ticket_info - computed: true, optional: true, required: false
  private _requireTicketInfo?: boolean | cdktf.IResolvable; 
  public get requireTicketInfo() {
    return this.getBooleanAttribute('require_ticket_info');
  }
  public set requireTicketInfo(value: boolean | cdktf.IResolvable) {
    this._requireTicketInfo = value;
  }
  public resetRequireTicketInfo() {
    this._requireTicketInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTicketInfoInput() {
    return this._requireTicketInfo;
  }
}
export interface GroupRoleManagementPolicyEligibleAssignmentRules {
  /**
  * Must the assignment have an expiry date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#expiration_required GroupRoleManagementPolicy#expiration_required}
  */
  readonly expirationRequired?: boolean | cdktf.IResolvable;
  /**
  * The duration after which assignments expire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#expire_after GroupRoleManagementPolicy#expire_after}
  */
  readonly expireAfter?: string;
}

export function groupRoleManagementPolicyEligibleAssignmentRulesToTerraform(struct?: GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference | GroupRoleManagementPolicyEligibleAssignmentRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_required: cdktf.booleanToTerraform(struct!.expirationRequired),
    expire_after: cdktf.stringToTerraform(struct!.expireAfter),
  }
}


export function groupRoleManagementPolicyEligibleAssignmentRulesToHclTerraform(struct?: GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference | GroupRoleManagementPolicyEligibleAssignmentRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_required: {
      value: cdktf.booleanToHclTerraform(struct!.expirationRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expire_after: {
      value: cdktf.stringToHclTerraform(struct!.expireAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyEligibleAssignmentRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationRequired = this._expirationRequired;
    }
    if (this._expireAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireAfter = this._expireAfter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyEligibleAssignmentRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationRequired = undefined;
      this._expireAfter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationRequired = value.expirationRequired;
      this._expireAfter = value.expireAfter;
    }
  }

  // expiration_required - computed: true, optional: true, required: false
  private _expirationRequired?: boolean | cdktf.IResolvable; 
  public get expirationRequired() {
    return this.getBooleanAttribute('expiration_required');
  }
  public set expirationRequired(value: boolean | cdktf.IResolvable) {
    this._expirationRequired = value;
  }
  public resetExpirationRequired() {
    this._expirationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationRequiredInput() {
    return this._expirationRequired;
  }

  // expire_after - computed: true, optional: true, required: false
  private _expireAfter?: string; 
  public get expireAfter() {
    return this.getStringAttribute('expire_after');
  }
  public set expireAfter(value: string) {
    this._expireAfter = value;
  }
  public resetExpireAfter() {
    this._expireAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireAfterInput() {
    return this._expireAfter;
  }
}
export interface GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function groupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsToTerraform(struct?: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function groupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsToHclTerraform(struct?: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function groupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsToTerraform(struct?: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function groupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsToHclTerraform(struct?: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function groupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsToTerraform(struct?: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function groupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsToHclTerraform(struct?: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface GroupRoleManagementPolicyNotificationRulesActiveAssignments {
  /**
  * admin_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#admin_notifications GroupRoleManagementPolicy#admin_notifications}
  */
  readonly adminNotifications?: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications;
  /**
  * approver_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#approver_notifications GroupRoleManagementPolicy#approver_notifications}
  */
  readonly approverNotifications?: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications;
  /**
  * assignee_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#assignee_notifications GroupRoleManagementPolicy#assignee_notifications}
  */
  readonly assigneeNotifications?: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications;
}

export function groupRoleManagementPolicyNotificationRulesActiveAssignmentsToTerraform(struct?: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference | GroupRoleManagementPolicyNotificationRulesActiveAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_notifications: groupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsToTerraform(struct!.adminNotifications),
    approver_notifications: groupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsToTerraform(struct!.approverNotifications),
    assignee_notifications: groupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsToTerraform(struct!.assigneeNotifications),
  }
}


export function groupRoleManagementPolicyNotificationRulesActiveAssignmentsToHclTerraform(struct?: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference | GroupRoleManagementPolicyNotificationRulesActiveAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_notifications: {
      value: groupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsToHclTerraform(struct!.adminNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList",
    },
    approver_notifications: {
      value: groupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsToHclTerraform(struct!.approverNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList",
    },
    assignee_notifications: {
      value: groupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsToHclTerraform(struct!.assigneeNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyNotificationRulesActiveAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminNotifications = this._adminNotifications?.internalValue;
    }
    if (this._approverNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approverNotifications = this._approverNotifications?.internalValue;
    }
    if (this._assigneeNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assigneeNotifications = this._assigneeNotifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyNotificationRulesActiveAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminNotifications.internalValue = undefined;
      this._approverNotifications.internalValue = undefined;
      this._assigneeNotifications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminNotifications.internalValue = value.adminNotifications;
      this._approverNotifications.internalValue = value.approverNotifications;
      this._assigneeNotifications.internalValue = value.assigneeNotifications;
    }
  }

  // admin_notifications - computed: false, optional: true, required: false
  private _adminNotifications = new GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference(this, "admin_notifications");
  public get adminNotifications() {
    return this._adminNotifications;
  }
  public putAdminNotifications(value: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications) {
    this._adminNotifications.internalValue = value;
  }
  public resetAdminNotifications() {
    this._adminNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNotificationsInput() {
    return this._adminNotifications.internalValue;
  }

  // approver_notifications - computed: false, optional: true, required: false
  private _approverNotifications = new GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference(this, "approver_notifications");
  public get approverNotifications() {
    return this._approverNotifications;
  }
  public putApproverNotifications(value: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications) {
    this._approverNotifications.internalValue = value;
  }
  public resetApproverNotifications() {
    this._approverNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverNotificationsInput() {
    return this._approverNotifications.internalValue;
  }

  // assignee_notifications - computed: false, optional: true, required: false
  private _assigneeNotifications = new GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference(this, "assignee_notifications");
  public get assigneeNotifications() {
    return this._assigneeNotifications;
  }
  public putAssigneeNotifications(value: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications) {
    this._assigneeNotifications.internalValue = value;
  }
  public resetAssigneeNotifications() {
    this._assigneeNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeNotificationsInput() {
    return this._assigneeNotifications.internalValue;
  }
}
export interface GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function groupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsToTerraform(struct?: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function groupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsToHclTerraform(struct?: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function groupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsToTerraform(struct?: GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function groupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsToHclTerraform(struct?: GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function groupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsToTerraform(struct?: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function groupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsToHclTerraform(struct?: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface GroupRoleManagementPolicyNotificationRulesEligibleActivations {
  /**
  * admin_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#admin_notifications GroupRoleManagementPolicy#admin_notifications}
  */
  readonly adminNotifications?: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications;
  /**
  * approver_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#approver_notifications GroupRoleManagementPolicy#approver_notifications}
  */
  readonly approverNotifications?: GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications;
  /**
  * assignee_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#assignee_notifications GroupRoleManagementPolicy#assignee_notifications}
  */
  readonly assigneeNotifications?: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications;
}

export function groupRoleManagementPolicyNotificationRulesEligibleActivationsToTerraform(struct?: GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference | GroupRoleManagementPolicyNotificationRulesEligibleActivations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_notifications: groupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsToTerraform(struct!.adminNotifications),
    approver_notifications: groupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsToTerraform(struct!.approverNotifications),
    assignee_notifications: groupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsToTerraform(struct!.assigneeNotifications),
  }
}


export function groupRoleManagementPolicyNotificationRulesEligibleActivationsToHclTerraform(struct?: GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference | GroupRoleManagementPolicyNotificationRulesEligibleActivations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_notifications: {
      value: groupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsToHclTerraform(struct!.adminNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList",
    },
    approver_notifications: {
      value: groupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsToHclTerraform(struct!.approverNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList",
    },
    assignee_notifications: {
      value: groupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsToHclTerraform(struct!.assigneeNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyNotificationRulesEligibleActivations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminNotifications = this._adminNotifications?.internalValue;
    }
    if (this._approverNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approverNotifications = this._approverNotifications?.internalValue;
    }
    if (this._assigneeNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assigneeNotifications = this._assigneeNotifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyNotificationRulesEligibleActivations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminNotifications.internalValue = undefined;
      this._approverNotifications.internalValue = undefined;
      this._assigneeNotifications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminNotifications.internalValue = value.adminNotifications;
      this._approverNotifications.internalValue = value.approverNotifications;
      this._assigneeNotifications.internalValue = value.assigneeNotifications;
    }
  }

  // admin_notifications - computed: false, optional: true, required: false
  private _adminNotifications = new GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference(this, "admin_notifications");
  public get adminNotifications() {
    return this._adminNotifications;
  }
  public putAdminNotifications(value: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications) {
    this._adminNotifications.internalValue = value;
  }
  public resetAdminNotifications() {
    this._adminNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNotificationsInput() {
    return this._adminNotifications.internalValue;
  }

  // approver_notifications - computed: false, optional: true, required: false
  private _approverNotifications = new GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference(this, "approver_notifications");
  public get approverNotifications() {
    return this._approverNotifications;
  }
  public putApproverNotifications(value: GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications) {
    this._approverNotifications.internalValue = value;
  }
  public resetApproverNotifications() {
    this._approverNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverNotificationsInput() {
    return this._approverNotifications.internalValue;
  }

  // assignee_notifications - computed: false, optional: true, required: false
  private _assigneeNotifications = new GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference(this, "assignee_notifications");
  public get assigneeNotifications() {
    return this._assigneeNotifications;
  }
  public putAssigneeNotifications(value: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications) {
    this._assigneeNotifications.internalValue = value;
  }
  public resetAssigneeNotifications() {
    this._assigneeNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeNotificationsInput() {
    return this._assigneeNotifications.internalValue;
  }
}
export interface GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function groupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsToTerraform(struct?: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function groupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsToHclTerraform(struct?: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function groupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsToTerraform(struct?: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function groupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsToHclTerraform(struct?: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function groupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsToTerraform(struct?: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function groupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsToHclTerraform(struct?: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference | GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface GroupRoleManagementPolicyNotificationRulesEligibleAssignments {
  /**
  * admin_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#admin_notifications GroupRoleManagementPolicy#admin_notifications}
  */
  readonly adminNotifications?: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications;
  /**
  * approver_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#approver_notifications GroupRoleManagementPolicy#approver_notifications}
  */
  readonly approverNotifications?: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications;
  /**
  * assignee_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#assignee_notifications GroupRoleManagementPolicy#assignee_notifications}
  */
  readonly assigneeNotifications?: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications;
}

export function groupRoleManagementPolicyNotificationRulesEligibleAssignmentsToTerraform(struct?: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference | GroupRoleManagementPolicyNotificationRulesEligibleAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_notifications: groupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsToTerraform(struct!.adminNotifications),
    approver_notifications: groupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsToTerraform(struct!.approverNotifications),
    assignee_notifications: groupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsToTerraform(struct!.assigneeNotifications),
  }
}


export function groupRoleManagementPolicyNotificationRulesEligibleAssignmentsToHclTerraform(struct?: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference | GroupRoleManagementPolicyNotificationRulesEligibleAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_notifications: {
      value: groupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsToHclTerraform(struct!.adminNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList",
    },
    approver_notifications: {
      value: groupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsToHclTerraform(struct!.approverNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList",
    },
    assignee_notifications: {
      value: groupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsToHclTerraform(struct!.assigneeNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyNotificationRulesEligibleAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminNotifications = this._adminNotifications?.internalValue;
    }
    if (this._approverNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approverNotifications = this._approverNotifications?.internalValue;
    }
    if (this._assigneeNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assigneeNotifications = this._assigneeNotifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyNotificationRulesEligibleAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminNotifications.internalValue = undefined;
      this._approverNotifications.internalValue = undefined;
      this._assigneeNotifications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminNotifications.internalValue = value.adminNotifications;
      this._approverNotifications.internalValue = value.approverNotifications;
      this._assigneeNotifications.internalValue = value.assigneeNotifications;
    }
  }

  // admin_notifications - computed: false, optional: true, required: false
  private _adminNotifications = new GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference(this, "admin_notifications");
  public get adminNotifications() {
    return this._adminNotifications;
  }
  public putAdminNotifications(value: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications) {
    this._adminNotifications.internalValue = value;
  }
  public resetAdminNotifications() {
    this._adminNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNotificationsInput() {
    return this._adminNotifications.internalValue;
  }

  // approver_notifications - computed: false, optional: true, required: false
  private _approverNotifications = new GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference(this, "approver_notifications");
  public get approverNotifications() {
    return this._approverNotifications;
  }
  public putApproverNotifications(value: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications) {
    this._approverNotifications.internalValue = value;
  }
  public resetApproverNotifications() {
    this._approverNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverNotificationsInput() {
    return this._approverNotifications.internalValue;
  }

  // assignee_notifications - computed: false, optional: true, required: false
  private _assigneeNotifications = new GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference(this, "assignee_notifications");
  public get assigneeNotifications() {
    return this._assigneeNotifications;
  }
  public putAssigneeNotifications(value: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications) {
    this._assigneeNotifications.internalValue = value;
  }
  public resetAssigneeNotifications() {
    this._assigneeNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeNotificationsInput() {
    return this._assigneeNotifications.internalValue;
  }
}
export interface GroupRoleManagementPolicyNotificationRules {
  /**
  * active_assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#active_assignments GroupRoleManagementPolicy#active_assignments}
  */
  readonly activeAssignments?: GroupRoleManagementPolicyNotificationRulesActiveAssignments;
  /**
  * eligible_activations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#eligible_activations GroupRoleManagementPolicy#eligible_activations}
  */
  readonly eligibleActivations?: GroupRoleManagementPolicyNotificationRulesEligibleActivations;
  /**
  * eligible_assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#eligible_assignments GroupRoleManagementPolicy#eligible_assignments}
  */
  readonly eligibleAssignments?: GroupRoleManagementPolicyNotificationRulesEligibleAssignments;
}

export function groupRoleManagementPolicyNotificationRulesToTerraform(struct?: GroupRoleManagementPolicyNotificationRulesOutputReference | GroupRoleManagementPolicyNotificationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_assignments: groupRoleManagementPolicyNotificationRulesActiveAssignmentsToTerraform(struct!.activeAssignments),
    eligible_activations: groupRoleManagementPolicyNotificationRulesEligibleActivationsToTerraform(struct!.eligibleActivations),
    eligible_assignments: groupRoleManagementPolicyNotificationRulesEligibleAssignmentsToTerraform(struct!.eligibleAssignments),
  }
}


export function groupRoleManagementPolicyNotificationRulesToHclTerraform(struct?: GroupRoleManagementPolicyNotificationRulesOutputReference | GroupRoleManagementPolicyNotificationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_assignments: {
      value: groupRoleManagementPolicyNotificationRulesActiveAssignmentsToHclTerraform(struct!.activeAssignments),
      isBlock: true,
      type: "list",
      storageClassType: "GroupRoleManagementPolicyNotificationRulesActiveAssignmentsList",
    },
    eligible_activations: {
      value: groupRoleManagementPolicyNotificationRulesEligibleActivationsToHclTerraform(struct!.eligibleActivations),
      isBlock: true,
      type: "list",
      storageClassType: "GroupRoleManagementPolicyNotificationRulesEligibleActivationsList",
    },
    eligible_assignments: {
      value: groupRoleManagementPolicyNotificationRulesEligibleAssignmentsToHclTerraform(struct!.eligibleAssignments),
      isBlock: true,
      type: "list",
      storageClassType: "GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRoleManagementPolicyNotificationRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupRoleManagementPolicyNotificationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeAssignments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeAssignments = this._activeAssignments?.internalValue;
    }
    if (this._eligibleActivations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eligibleActivations = this._eligibleActivations?.internalValue;
    }
    if (this._eligibleAssignments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eligibleAssignments = this._eligibleAssignments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRoleManagementPolicyNotificationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeAssignments.internalValue = undefined;
      this._eligibleActivations.internalValue = undefined;
      this._eligibleAssignments.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeAssignments.internalValue = value.activeAssignments;
      this._eligibleActivations.internalValue = value.eligibleActivations;
      this._eligibleAssignments.internalValue = value.eligibleAssignments;
    }
  }

  // active_assignments - computed: false, optional: true, required: false
  private _activeAssignments = new GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference(this, "active_assignments");
  public get activeAssignments() {
    return this._activeAssignments;
  }
  public putActiveAssignments(value: GroupRoleManagementPolicyNotificationRulesActiveAssignments) {
    this._activeAssignments.internalValue = value;
  }
  public resetActiveAssignments() {
    this._activeAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeAssignmentsInput() {
    return this._activeAssignments.internalValue;
  }

  // eligible_activations - computed: false, optional: true, required: false
  private _eligibleActivations = new GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference(this, "eligible_activations");
  public get eligibleActivations() {
    return this._eligibleActivations;
  }
  public putEligibleActivations(value: GroupRoleManagementPolicyNotificationRulesEligibleActivations) {
    this._eligibleActivations.internalValue = value;
  }
  public resetEligibleActivations() {
    this._eligibleActivations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eligibleActivationsInput() {
    return this._eligibleActivations.internalValue;
  }

  // eligible_assignments - computed: false, optional: true, required: false
  private _eligibleAssignments = new GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference(this, "eligible_assignments");
  public get eligibleAssignments() {
    return this._eligibleAssignments;
  }
  public putEligibleAssignments(value: GroupRoleManagementPolicyNotificationRulesEligibleAssignments) {
    this._eligibleAssignments.internalValue = value;
  }
  public resetEligibleAssignments() {
    this._eligibleAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eligibleAssignmentsInput() {
    return this._eligibleAssignments.internalValue;
  }
}
export interface GroupRoleManagementPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#create GroupRoleManagementPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#delete GroupRoleManagementPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#read GroupRoleManagementPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#update GroupRoleManagementPolicy#update}
  */
  readonly update?: string;
}

export function groupRoleManagementPolicyTimeoutsToTerraform(struct?: GroupRoleManagementPolicyTimeouts | cdktf.IResolvable): any {
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


export function groupRoleManagementPolicyTimeoutsToHclTerraform(struct?: GroupRoleManagementPolicyTimeouts | cdktf.IResolvable): any {
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

export class GroupRoleManagementPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRoleManagementPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupRoleManagementPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy azuread_group_role_management_policy}
*/
export class GroupRoleManagementPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_group_role_management_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupRoleManagementPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupRoleManagementPolicy to import
  * @param importFromId The id of the existing GroupRoleManagementPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupRoleManagementPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_group_role_management_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/group_role_management_policy azuread_group_role_management_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupRoleManagementPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GroupRoleManagementPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_group_role_management_policy',
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
    this._groupId = config.groupId;
    this._id = config.id;
    this._roleId = config.roleId;
    this._activationRules.internalValue = config.activationRules;
    this._activeAssignmentRules.internalValue = config.activeAssignmentRules;
    this._eligibleAssignmentRules.internalValue = config.eligibleAssignmentRules;
    this._notificationRules.internalValue = config.notificationRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // activation_rules - computed: false, optional: true, required: false
  private _activationRules = new GroupRoleManagementPolicyActivationRulesOutputReference(this, "activation_rules");
  public get activationRules() {
    return this._activationRules;
  }
  public putActivationRules(value: GroupRoleManagementPolicyActivationRules) {
    this._activationRules.internalValue = value;
  }
  public resetActivationRules() {
    this._activationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationRulesInput() {
    return this._activationRules.internalValue;
  }

  // active_assignment_rules - computed: false, optional: true, required: false
  private _activeAssignmentRules = new GroupRoleManagementPolicyActiveAssignmentRulesOutputReference(this, "active_assignment_rules");
  public get activeAssignmentRules() {
    return this._activeAssignmentRules;
  }
  public putActiveAssignmentRules(value: GroupRoleManagementPolicyActiveAssignmentRules) {
    this._activeAssignmentRules.internalValue = value;
  }
  public resetActiveAssignmentRules() {
    this._activeAssignmentRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeAssignmentRulesInput() {
    return this._activeAssignmentRules.internalValue;
  }

  // eligible_assignment_rules - computed: false, optional: true, required: false
  private _eligibleAssignmentRules = new GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference(this, "eligible_assignment_rules");
  public get eligibleAssignmentRules() {
    return this._eligibleAssignmentRules;
  }
  public putEligibleAssignmentRules(value: GroupRoleManagementPolicyEligibleAssignmentRules) {
    this._eligibleAssignmentRules.internalValue = value;
  }
  public resetEligibleAssignmentRules() {
    this._eligibleAssignmentRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eligibleAssignmentRulesInput() {
    return this._eligibleAssignmentRules.internalValue;
  }

  // notification_rules - computed: false, optional: true, required: false
  private _notificationRules = new GroupRoleManagementPolicyNotificationRulesOutputReference(this, "notification_rules");
  public get notificationRules() {
    return this._notificationRules;
  }
  public putNotificationRules(value: GroupRoleManagementPolicyNotificationRules) {
    this._notificationRules.internalValue = value;
  }
  public resetNotificationRules() {
    this._notificationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationRulesInput() {
    return this._notificationRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GroupRoleManagementPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GroupRoleManagementPolicyTimeouts) {
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
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      role_id: cdktf.stringToTerraform(this._roleId),
      activation_rules: groupRoleManagementPolicyActivationRulesToTerraform(this._activationRules.internalValue),
      active_assignment_rules: groupRoleManagementPolicyActiveAssignmentRulesToTerraform(this._activeAssignmentRules.internalValue),
      eligible_assignment_rules: groupRoleManagementPolicyEligibleAssignmentRulesToTerraform(this._eligibleAssignmentRules.internalValue),
      notification_rules: groupRoleManagementPolicyNotificationRulesToTerraform(this._notificationRules.internalValue),
      timeouts: groupRoleManagementPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activation_rules: {
        value: groupRoleManagementPolicyActivationRulesToHclTerraform(this._activationRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupRoleManagementPolicyActivationRulesList",
      },
      active_assignment_rules: {
        value: groupRoleManagementPolicyActiveAssignmentRulesToHclTerraform(this._activeAssignmentRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupRoleManagementPolicyActiveAssignmentRulesList",
      },
      eligible_assignment_rules: {
        value: groupRoleManagementPolicyEligibleAssignmentRulesToHclTerraform(this._eligibleAssignmentRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupRoleManagementPolicyEligibleAssignmentRulesList",
      },
      notification_rules: {
        value: groupRoleManagementPolicyNotificationRulesToHclTerraform(this._notificationRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupRoleManagementPolicyNotificationRulesList",
      },
      timeouts: {
        value: groupRoleManagementPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupRoleManagementPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
