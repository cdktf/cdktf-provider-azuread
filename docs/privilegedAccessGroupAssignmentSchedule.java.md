# `privilegedAccessGroupAssignmentSchedule` Submodule <a name="`privilegedAccessGroupAssignmentSchedule` Submodule" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivilegedAccessGroupAssignmentSchedule <a name="PrivilegedAccessGroupAssignmentSchedule" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule azuread_privileged_access_group_assignment_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.privileged_access_group_assignment_schedule.PrivilegedAccessGroupAssignmentSchedule;

PrivilegedAccessGroupAssignmentSchedule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assignmentType(java.lang.String)
    .groupId(java.lang.String)
    .principalId(java.lang.String)
//  .duration(java.lang.String)
//  .expirationDate(java.lang.String)
//  .id(java.lang.String)
//  .justification(java.lang.String)
//  .permanentAssignment(java.lang.Boolean|IResolvable)
//  .startDate(java.lang.String)
//  .ticketNumber(java.lang.String)
//  .ticketSystem(java.lang.String)
//  .timeouts(PrivilegedAccessGroupAssignmentScheduleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.assignmentType">assignmentType</a></code> | <code>java.lang.String</code> | The ID of the assignment to the group. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.String</code> | The ID of the Group representing the scope of the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.principalId">principalId</a></code> | <code>java.lang.String</code> | The ID of the Principal assigned to the schedule. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.duration">duration</a></code> | <code>java.lang.String</code> | The duration of the assignment, formatted as an ISO8601 duration string (e.g. P3D for 3 days). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#id PrivilegedAccessGroupAssignmentSchedule#id}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.justification">justification</a></code> | <code>java.lang.String</code> | The justification for the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.permanentAssignment">permanentAssignment</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Is the assignment permanent. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.startDate">startDate</a></code> | <code>java.lang.String</code> | The date that this assignment starts, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.ticketNumber">ticketNumber</a></code> | <code>java.lang.String</code> | The ticket number authorising the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.ticketSystem">ticketSystem</a></code> | <code>java.lang.String</code> | The ticket system authorising the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts">PrivilegedAccessGroupAssignmentScheduleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assignmentType`<sup>Required</sup> <a name="assignmentType" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.assignmentType"></a>

- *Type:* java.lang.String

The ID of the assignment to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#assignment_type PrivilegedAccessGroupAssignmentSchedule#assignment_type}

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.groupId"></a>

- *Type:* java.lang.String

The ID of the Group representing the scope of the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#group_id PrivilegedAccessGroupAssignmentSchedule#group_id}

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.principalId"></a>

- *Type:* java.lang.String

The ID of the Principal assigned to the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#principal_id PrivilegedAccessGroupAssignmentSchedule#principal_id}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.duration"></a>

- *Type:* java.lang.String

The duration of the assignment, formatted as an ISO8601 duration string (e.g. P3D for 3 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#duration PrivilegedAccessGroupAssignmentSchedule#duration}

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.expirationDate"></a>

- *Type:* java.lang.String

The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#expiration_date PrivilegedAccessGroupAssignmentSchedule#expiration_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#id PrivilegedAccessGroupAssignmentSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.justification"></a>

- *Type:* java.lang.String

The justification for the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#justification PrivilegedAccessGroupAssignmentSchedule#justification}

---

##### `permanentAssignment`<sup>Optional</sup> <a name="permanentAssignment" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.permanentAssignment"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Is the assignment permanent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#permanent_assignment PrivilegedAccessGroupAssignmentSchedule#permanent_assignment}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.startDate"></a>

- *Type:* java.lang.String

The date that this assignment starts, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#start_date PrivilegedAccessGroupAssignmentSchedule#start_date}

---

##### `ticketNumber`<sup>Optional</sup> <a name="ticketNumber" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.ticketNumber"></a>

- *Type:* java.lang.String

The ticket number authorising the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#ticket_number PrivilegedAccessGroupAssignmentSchedule#ticket_number}

---

##### `ticketSystem`<sup>Optional</sup> <a name="ticketSystem" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.ticketSystem"></a>

- *Type:* java.lang.String

The ticket system authorising the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#ticket_system PrivilegedAccessGroupAssignmentSchedule#ticket_system}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts">PrivilegedAccessGroupAssignmentScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#timeouts PrivilegedAccessGroupAssignmentSchedule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetExpirationDate">resetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetJustification">resetJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetPermanentAssignment">resetPermanentAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetTicketNumber">resetTicketNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetTicketSystem">resetTicketSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.putTimeouts"></a>

```java
public void putTimeouts(PrivilegedAccessGroupAssignmentScheduleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts">PrivilegedAccessGroupAssignmentScheduleTimeouts</a>

---

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetExpirationDate` <a name="resetExpirationDate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetExpirationDate"></a>

```java
public void resetExpirationDate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetId"></a>

```java
public void resetId()
```

##### `resetJustification` <a name="resetJustification" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetJustification"></a>

```java
public void resetJustification()
```

##### `resetPermanentAssignment` <a name="resetPermanentAssignment" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetPermanentAssignment"></a>

```java
public void resetPermanentAssignment()
```

##### `resetStartDate` <a name="resetStartDate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetStartDate"></a>

```java
public void resetStartDate()
```

##### `resetTicketNumber` <a name="resetTicketNumber" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetTicketNumber"></a>

```java
public void resetTicketNumber()
```

##### `resetTicketSystem` <a name="resetTicketSystem" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetTicketSystem"></a>

```java
public void resetTicketSystem()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivilegedAccessGroupAssignmentSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.privileged_access_group_assignment_schedule.PrivilegedAccessGroupAssignmentSchedule;

PrivilegedAccessGroupAssignmentSchedule.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.privileged_access_group_assignment_schedule.PrivilegedAccessGroupAssignmentSchedule;

PrivilegedAccessGroupAssignmentSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.privileged_access_group_assignment_schedule.PrivilegedAccessGroupAssignmentSchedule;

PrivilegedAccessGroupAssignmentSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azuread.privileged_access_group_assignment_schedule.PrivilegedAccessGroupAssignmentSchedule;

PrivilegedAccessGroupAssignmentSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PrivilegedAccessGroupAssignmentSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PrivilegedAccessGroupAssignmentSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PrivilegedAccessGroupAssignmentSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PrivilegedAccessGroupAssignmentSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PrivilegedAccessGroupAssignmentSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference">PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.assignmentTypeInput">assignmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.expirationDateInput">expirationDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.justificationInput">justificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.permanentAssignmentInput">permanentAssignmentInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.principalIdInput">principalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.startDateInput">startDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.ticketNumberInput">ticketNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.ticketSystemInput">ticketSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts">PrivilegedAccessGroupAssignmentScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.assignmentType">assignmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.justification">justification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.permanentAssignment">permanentAssignment</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.ticketNumber">ticketNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.ticketSystem">ticketSystem</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.timeouts"></a>

```java
public PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference">PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference</a>

---

##### `assignmentTypeInput`<sup>Optional</sup> <a name="assignmentTypeInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.assignmentTypeInput"></a>

```java
public java.lang.String getAssignmentTypeInput();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `expirationDateInput`<sup>Optional</sup> <a name="expirationDateInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.expirationDateInput"></a>

```java
public java.lang.String getExpirationDateInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `justificationInput`<sup>Optional</sup> <a name="justificationInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.justificationInput"></a>

```java
public java.lang.String getJustificationInput();
```

- *Type:* java.lang.String

---

##### `permanentAssignmentInput`<sup>Optional</sup> <a name="permanentAssignmentInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.permanentAssignmentInput"></a>

```java
public java.lang.Boolean|IResolvable getPermanentAssignmentInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.principalIdInput"></a>

```java
public java.lang.String getPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.startDateInput"></a>

```java
public java.lang.String getStartDateInput();
```

- *Type:* java.lang.String

---

##### `ticketNumberInput`<sup>Optional</sup> <a name="ticketNumberInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.ticketNumberInput"></a>

```java
public java.lang.String getTicketNumberInput();
```

- *Type:* java.lang.String

---

##### `ticketSystemInput`<sup>Optional</sup> <a name="ticketSystemInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.ticketSystemInput"></a>

```java
public java.lang.String getTicketSystemInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.timeoutsInput"></a>

```java
public IResolvable|PrivilegedAccessGroupAssignmentScheduleTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts">PrivilegedAccessGroupAssignmentScheduleTimeouts</a>

---

##### `assignmentType`<sup>Required</sup> <a name="assignmentType" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.assignmentType"></a>

```java
public java.lang.String getAssignmentType();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `justification`<sup>Required</sup> <a name="justification" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.justification"></a>

```java
public java.lang.String getJustification();
```

- *Type:* java.lang.String

---

##### `permanentAssignment`<sup>Required</sup> <a name="permanentAssignment" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.permanentAssignment"></a>

```java
public java.lang.Boolean|IResolvable getPermanentAssignment();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `ticketNumber`<sup>Required</sup> <a name="ticketNumber" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.ticketNumber"></a>

```java
public java.lang.String getTicketNumber();
```

- *Type:* java.lang.String

---

##### `ticketSystem`<sup>Required</sup> <a name="ticketSystem" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.ticketSystem"></a>

```java
public java.lang.String getTicketSystem();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrivilegedAccessGroupAssignmentScheduleConfig <a name="PrivilegedAccessGroupAssignmentScheduleConfig" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.privileged_access_group_assignment_schedule.PrivilegedAccessGroupAssignmentScheduleConfig;

PrivilegedAccessGroupAssignmentScheduleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assignmentType(java.lang.String)
    .groupId(java.lang.String)
    .principalId(java.lang.String)
//  .duration(java.lang.String)
//  .expirationDate(java.lang.String)
//  .id(java.lang.String)
//  .justification(java.lang.String)
//  .permanentAssignment(java.lang.Boolean|IResolvable)
//  .startDate(java.lang.String)
//  .ticketNumber(java.lang.String)
//  .ticketSystem(java.lang.String)
//  .timeouts(PrivilegedAccessGroupAssignmentScheduleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.assignmentType">assignmentType</a></code> | <code>java.lang.String</code> | The ID of the assignment to the group. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.groupId">groupId</a></code> | <code>java.lang.String</code> | The ID of the Group representing the scope of the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.principalId">principalId</a></code> | <code>java.lang.String</code> | The ID of the Principal assigned to the schedule. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.duration">duration</a></code> | <code>java.lang.String</code> | The duration of the assignment, formatted as an ISO8601 duration string (e.g. P3D for 3 days). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#id PrivilegedAccessGroupAssignmentSchedule#id}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.justification">justification</a></code> | <code>java.lang.String</code> | The justification for the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.permanentAssignment">permanentAssignment</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Is the assignment permanent. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.startDate">startDate</a></code> | <code>java.lang.String</code> | The date that this assignment starts, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.ticketNumber">ticketNumber</a></code> | <code>java.lang.String</code> | The ticket number authorising the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.ticketSystem">ticketSystem</a></code> | <code>java.lang.String</code> | The ticket system authorising the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts">PrivilegedAccessGroupAssignmentScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assignmentType`<sup>Required</sup> <a name="assignmentType" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.assignmentType"></a>

```java
public java.lang.String getAssignmentType();
```

- *Type:* java.lang.String

The ID of the assignment to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#assignment_type PrivilegedAccessGroupAssignmentSchedule#assignment_type}

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

The ID of the Group representing the scope of the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#group_id PrivilegedAccessGroupAssignmentSchedule#group_id}

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

The ID of the Principal assigned to the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#principal_id PrivilegedAccessGroupAssignmentSchedule#principal_id}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The duration of the assignment, formatted as an ISO8601 duration string (e.g. P3D for 3 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#duration PrivilegedAccessGroupAssignmentSchedule#duration}

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#expiration_date PrivilegedAccessGroupAssignmentSchedule#expiration_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#id PrivilegedAccessGroupAssignmentSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.justification"></a>

```java
public java.lang.String getJustification();
```

- *Type:* java.lang.String

The justification for the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#justification PrivilegedAccessGroupAssignmentSchedule#justification}

---

##### `permanentAssignment`<sup>Optional</sup> <a name="permanentAssignment" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.permanentAssignment"></a>

```java
public java.lang.Boolean|IResolvable getPermanentAssignment();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Is the assignment permanent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#permanent_assignment PrivilegedAccessGroupAssignmentSchedule#permanent_assignment}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

The date that this assignment starts, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#start_date PrivilegedAccessGroupAssignmentSchedule#start_date}

---

##### `ticketNumber`<sup>Optional</sup> <a name="ticketNumber" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.ticketNumber"></a>

```java
public java.lang.String getTicketNumber();
```

- *Type:* java.lang.String

The ticket number authorising the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#ticket_number PrivilegedAccessGroupAssignmentSchedule#ticket_number}

---

##### `ticketSystem`<sup>Optional</sup> <a name="ticketSystem" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.ticketSystem"></a>

```java
public java.lang.String getTicketSystem();
```

- *Type:* java.lang.String

The ticket system authorising the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#ticket_system PrivilegedAccessGroupAssignmentSchedule#ticket_system}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.timeouts"></a>

```java
public PrivilegedAccessGroupAssignmentScheduleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts">PrivilegedAccessGroupAssignmentScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#timeouts PrivilegedAccessGroupAssignmentSchedule#timeouts}

---

### PrivilegedAccessGroupAssignmentScheduleTimeouts <a name="PrivilegedAccessGroupAssignmentScheduleTimeouts" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.privileged_access_group_assignment_schedule.PrivilegedAccessGroupAssignmentScheduleTimeouts;

PrivilegedAccessGroupAssignmentScheduleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#create PrivilegedAccessGroupAssignmentSchedule#create}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#delete PrivilegedAccessGroupAssignmentSchedule#delete}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#read PrivilegedAccessGroupAssignmentSchedule#read}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#update PrivilegedAccessGroupAssignmentSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#create PrivilegedAccessGroupAssignmentSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#delete PrivilegedAccessGroupAssignmentSchedule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#read PrivilegedAccessGroupAssignmentSchedule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_assignment_schedule#update PrivilegedAccessGroupAssignmentSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference <a name="PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.privileged_access_group_assignment_schedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference;

new PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts">PrivilegedAccessGroupAssignmentScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|PrivilegedAccessGroupAssignmentScheduleTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts">PrivilegedAccessGroupAssignmentScheduleTimeouts</a>

---



