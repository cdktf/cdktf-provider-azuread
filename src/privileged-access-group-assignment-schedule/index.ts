/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivilegedAccessGroupAssignmentScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the assignment to the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#assignment_type PrivilegedAccessGroupAssignmentSchedule#assignment_type}
  */
  readonly assignmentType: string;
  /**
  * The duration of the assignment, formatted as an ISO8601 duration string (e.g. P3D for 3 days)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#duration PrivilegedAccessGroupAssignmentSchedule#duration}
  */
  readonly duration?: string;
  /**
  * The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#expiration_date PrivilegedAccessGroupAssignmentSchedule#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * The ID of the Group representing the scope of the assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#group_id PrivilegedAccessGroupAssignmentSchedule#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#id PrivilegedAccessGroupAssignmentSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The justification for the assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#justification PrivilegedAccessGroupAssignmentSchedule#justification}
  */
  readonly justification?: string;
  /**
  * Is the assignment permanent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#permanent_assignment PrivilegedAccessGroupAssignmentSchedule#permanent_assignment}
  */
  readonly permanentAssignment?: boolean | cdktf.IResolvable;
  /**
  * The ID of the Principal assigned to the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#principal_id PrivilegedAccessGroupAssignmentSchedule#principal_id}
  */
  readonly principalId: string;
  /**
  * The date that this assignment starts, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#start_date PrivilegedAccessGroupAssignmentSchedule#start_date}
  */
  readonly startDate?: string;
  /**
  * The ticket number authorising the assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#ticket_number PrivilegedAccessGroupAssignmentSchedule#ticket_number}
  */
  readonly ticketNumber?: string;
  /**
  * The ticket system authorising the assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#ticket_system PrivilegedAccessGroupAssignmentSchedule#ticket_system}
  */
  readonly ticketSystem?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#timeouts PrivilegedAccessGroupAssignmentSchedule#timeouts}
  */
  readonly timeouts?: PrivilegedAccessGroupAssignmentScheduleTimeouts;
}
export interface PrivilegedAccessGroupAssignmentScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#create PrivilegedAccessGroupAssignmentSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#delete PrivilegedAccessGroupAssignmentSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#read PrivilegedAccessGroupAssignmentSchedule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#update PrivilegedAccessGroupAssignmentSchedule#update}
  */
  readonly update?: string;
}

export function privilegedAccessGroupAssignmentScheduleTimeoutsToTerraform(struct?: PrivilegedAccessGroupAssignmentScheduleTimeouts | cdktf.IResolvable): any {
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


export function privilegedAccessGroupAssignmentScheduleTimeoutsToHclTerraform(struct?: PrivilegedAccessGroupAssignmentScheduleTimeouts | cdktf.IResolvable): any {
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

export class PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivilegedAccessGroupAssignmentScheduleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PrivilegedAccessGroupAssignmentScheduleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule azuread_privileged_access_group_assignment_schedule}
*/
export class PrivilegedAccessGroupAssignmentSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_privileged_access_group_assignment_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivilegedAccessGroupAssignmentSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivilegedAccessGroupAssignmentSchedule to import
  * @param importFromId The id of the existing PrivilegedAccessGroupAssignmentSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivilegedAccessGroupAssignmentSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_privileged_access_group_assignment_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/privileged_access_group_assignment_schedule azuread_privileged_access_group_assignment_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivilegedAccessGroupAssignmentScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: PrivilegedAccessGroupAssignmentScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_privileged_access_group_assignment_schedule',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.50.0',
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
    this._assignmentType = config.assignmentType;
    this._duration = config.duration;
    this._expirationDate = config.expirationDate;
    this._groupId = config.groupId;
    this._id = config.id;
    this._justification = config.justification;
    this._permanentAssignment = config.permanentAssignment;
    this._principalId = config.principalId;
    this._startDate = config.startDate;
    this._ticketNumber = config.ticketNumber;
    this._ticketSystem = config.ticketSystem;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignment_type - computed: false, optional: false, required: true
  private _assignmentType?: string; 
  public get assignmentType() {
    return this.getStringAttribute('assignment_type');
  }
  public set assignmentType(value: string) {
    this._assignmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentTypeInput() {
    return this._assignmentType;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // expiration_date - computed: true, optional: true, required: false
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

  // justification - computed: false, optional: true, required: false
  private _justification?: string; 
  public get justification() {
    return this.getStringAttribute('justification');
  }
  public set justification(value: string) {
    this._justification = value;
  }
  public resetJustification() {
    this._justification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationInput() {
    return this._justification;
  }

  // permanent_assignment - computed: true, optional: true, required: false
  private _permanentAssignment?: boolean | cdktf.IResolvable; 
  public get permanentAssignment() {
    return this.getBooleanAttribute('permanent_assignment');
  }
  public set permanentAssignment(value: boolean | cdktf.IResolvable) {
    this._permanentAssignment = value;
  }
  public resetPermanentAssignment() {
    this._permanentAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentAssignmentInput() {
    return this._permanentAssignment;
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // start_date - computed: true, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // ticket_number - computed: false, optional: true, required: false
  private _ticketNumber?: string; 
  public get ticketNumber() {
    return this.getStringAttribute('ticket_number');
  }
  public set ticketNumber(value: string) {
    this._ticketNumber = value;
  }
  public resetTicketNumber() {
    this._ticketNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketNumberInput() {
    return this._ticketNumber;
  }

  // ticket_system - computed: false, optional: true, required: false
  private _ticketSystem?: string; 
  public get ticketSystem() {
    return this.getStringAttribute('ticket_system');
  }
  public set ticketSystem(value: string) {
    this._ticketSystem = value;
  }
  public resetTicketSystem() {
    this._ticketSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketSystemInput() {
    return this._ticketSystem;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivilegedAccessGroupAssignmentScheduleTimeouts) {
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
      assignment_type: cdktf.stringToTerraform(this._assignmentType),
      duration: cdktf.stringToTerraform(this._duration),
      expiration_date: cdktf.stringToTerraform(this._expirationDate),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      justification: cdktf.stringToTerraform(this._justification),
      permanent_assignment: cdktf.booleanToTerraform(this._permanentAssignment),
      principal_id: cdktf.stringToTerraform(this._principalId),
      start_date: cdktf.stringToTerraform(this._startDate),
      ticket_number: cdktf.stringToTerraform(this._ticketNumber),
      ticket_system: cdktf.stringToTerraform(this._ticketSystem),
      timeouts: privilegedAccessGroupAssignmentScheduleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignment_type: {
        value: cdktf.stringToHclTerraform(this._assignmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_date: {
        value: cdktf.stringToHclTerraform(this._expirationDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      justification: {
        value: cdktf.stringToHclTerraform(this._justification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permanent_assignment: {
        value: cdktf.booleanToHclTerraform(this._permanentAssignment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      principal_id: {
        value: cdktf.stringToHclTerraform(this._principalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_date: {
        value: cdktf.stringToHclTerraform(this._startDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ticket_number: {
        value: cdktf.stringToHclTerraform(this._ticketNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ticket_system: {
        value: cdktf.stringToHclTerraform(this._ticketSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: privilegedAccessGroupAssignmentScheduleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivilegedAccessGroupAssignmentScheduleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
