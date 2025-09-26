# `privilegedAccessGroupEligibilitySchedule` Submodule <a name="`privilegedAccessGroupEligibilitySchedule` Submodule" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivilegedAccessGroupEligibilitySchedule <a name="PrivilegedAccessGroupEligibilitySchedule" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule azuread_privileged_access_group_eligibility_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import privileged_access_group_eligibility_schedule

privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assignment_type: str,
  group_id: str,
  principal_id: str,
  duration: str = None,
  expiration_date: str = None,
  id: str = None,
  justification: str = None,
  permanent_assignment: typing.Union[bool, IResolvable] = None,
  start_date: str = None,
  ticket_number: str = None,
  ticket_system: str = None,
  timeouts: PrivilegedAccessGroupEligibilityScheduleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.assignmentType">assignment_type</a></code> | <code>str</code> | The ID of the assignment to the group. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | The ID of the Group representing the scope of the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.principalId">principal_id</a></code> | <code>str</code> | The ID of the Principal assigned to the schedule. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.duration">duration</a></code> | <code>str</code> | The duration of the assignment, formatted as an ISO8601 duration string (e.g. P3D for 3 days). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.expirationDate">expiration_date</a></code> | <code>str</code> | The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#id PrivilegedAccessGroupEligibilitySchedule#id}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.justification">justification</a></code> | <code>str</code> | The justification for the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.permanentAssignment">permanent_assignment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the assignment permanent. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.startDate">start_date</a></code> | <code>str</code> | The date that this assignment starts, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.ticketNumber">ticket_number</a></code> | <code>str</code> | The ticket number authorising the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.ticketSystem">ticket_system</a></code> | <code>str</code> | The ticket system authorising the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts">PrivilegedAccessGroupEligibilityScheduleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assignment_type`<sup>Required</sup> <a name="assignment_type" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.assignmentType"></a>

- *Type:* str

The ID of the assignment to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#assignment_type PrivilegedAccessGroupEligibilitySchedule#assignment_type}

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.groupId"></a>

- *Type:* str

The ID of the Group representing the scope of the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#group_id PrivilegedAccessGroupEligibilitySchedule#group_id}

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.principalId"></a>

- *Type:* str

The ID of the Principal assigned to the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#principal_id PrivilegedAccessGroupEligibilitySchedule#principal_id}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.duration"></a>

- *Type:* str

The duration of the assignment, formatted as an ISO8601 duration string (e.g. P3D for 3 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#duration PrivilegedAccessGroupEligibilitySchedule#duration}

---

##### `expiration_date`<sup>Optional</sup> <a name="expiration_date" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.expirationDate"></a>

- *Type:* str

The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#expiration_date PrivilegedAccessGroupEligibilitySchedule#expiration_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#id PrivilegedAccessGroupEligibilitySchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.justification"></a>

- *Type:* str

The justification for the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#justification PrivilegedAccessGroupEligibilitySchedule#justification}

---

##### `permanent_assignment`<sup>Optional</sup> <a name="permanent_assignment" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.permanentAssignment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the assignment permanent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#permanent_assignment PrivilegedAccessGroupEligibilitySchedule#permanent_assignment}

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.startDate"></a>

- *Type:* str

The date that this assignment starts, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#start_date PrivilegedAccessGroupEligibilitySchedule#start_date}

---

##### `ticket_number`<sup>Optional</sup> <a name="ticket_number" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.ticketNumber"></a>

- *Type:* str

The ticket number authorising the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#ticket_number PrivilegedAccessGroupEligibilitySchedule#ticket_number}

---

##### `ticket_system`<sup>Optional</sup> <a name="ticket_system" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.ticketSystem"></a>

- *Type:* str

The ticket system authorising the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#ticket_system PrivilegedAccessGroupEligibilitySchedule#ticket_system}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts">PrivilegedAccessGroupEligibilityScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#timeouts PrivilegedAccessGroupEligibilitySchedule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetExpirationDate">reset_expiration_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetJustification">reset_justification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetPermanentAssignment">reset_permanent_assignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetStartDate">reset_start_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetTicketNumber">reset_ticket_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetTicketSystem">reset_ticket_system</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#create PrivilegedAccessGroupEligibilitySchedule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#delete PrivilegedAccessGroupEligibilitySchedule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#read PrivilegedAccessGroupEligibilitySchedule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#update PrivilegedAccessGroupEligibilitySchedule#update}.

---

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_expiration_date` <a name="reset_expiration_date" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetExpirationDate"></a>

```python
def reset_expiration_date() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_justification` <a name="reset_justification" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetJustification"></a>

```python
def reset_justification() -> None
```

##### `reset_permanent_assignment` <a name="reset_permanent_assignment" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetPermanentAssignment"></a>

```python
def reset_permanent_assignment() -> None
```

##### `reset_start_date` <a name="reset_start_date" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetStartDate"></a>

```python
def reset_start_date() -> None
```

##### `reset_ticket_number` <a name="reset_ticket_number" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetTicketNumber"></a>

```python
def reset_ticket_number() -> None
```

##### `reset_ticket_system` <a name="reset_ticket_system" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetTicketSystem"></a>

```python
def reset_ticket_system() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PrivilegedAccessGroupEligibilitySchedule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import privileged_access_group_eligibility_schedule

privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import privileged_access_group_eligibility_schedule

privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import privileged_access_group_eligibility_schedule

privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import privileged_access_group_eligibility_schedule

privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PrivilegedAccessGroupEligibilitySchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PrivilegedAccessGroupEligibilitySchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PrivilegedAccessGroupEligibilitySchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivilegedAccessGroupEligibilitySchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference">PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.assignmentTypeInput">assignment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.expirationDateInput">expiration_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.justificationInput">justification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.permanentAssignmentInput">permanent_assignment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.principalIdInput">principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.startDateInput">start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.ticketNumberInput">ticket_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.ticketSystemInput">ticket_system_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts">PrivilegedAccessGroupEligibilityScheduleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.assignmentType">assignment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.expirationDate">expiration_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.justification">justification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.permanentAssignment">permanent_assignment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.ticketNumber">ticket_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.ticketSystem">ticket_system</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.timeouts"></a>

```python
timeouts: PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference">PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference</a>

---

##### `assignment_type_input`<sup>Optional</sup> <a name="assignment_type_input" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.assignmentTypeInput"></a>

```python
assignment_type_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `expiration_date_input`<sup>Optional</sup> <a name="expiration_date_input" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.expirationDateInput"></a>

```python
expiration_date_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `justification_input`<sup>Optional</sup> <a name="justification_input" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.justificationInput"></a>

```python
justification_input: str
```

- *Type:* str

---

##### `permanent_assignment_input`<sup>Optional</sup> <a name="permanent_assignment_input" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.permanentAssignmentInput"></a>

```python
permanent_assignment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.principalIdInput"></a>

```python
principal_id_input: str
```

- *Type:* str

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.startDateInput"></a>

```python
start_date_input: str
```

- *Type:* str

---

##### `ticket_number_input`<sup>Optional</sup> <a name="ticket_number_input" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.ticketNumberInput"></a>

```python
ticket_number_input: str
```

- *Type:* str

---

##### `ticket_system_input`<sup>Optional</sup> <a name="ticket_system_input" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.ticketSystemInput"></a>

```python
ticket_system_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PrivilegedAccessGroupEligibilityScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts">PrivilegedAccessGroupEligibilityScheduleTimeouts</a>]

---

##### `assignment_type`<sup>Required</sup> <a name="assignment_type" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.assignmentType"></a>

```python
assignment_type: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `justification`<sup>Required</sup> <a name="justification" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.justification"></a>

```python
justification: str
```

- *Type:* str

---

##### `permanent_assignment`<sup>Required</sup> <a name="permanent_assignment" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.permanentAssignment"></a>

```python
permanent_assignment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `ticket_number`<sup>Required</sup> <a name="ticket_number" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.ticketNumber"></a>

```python
ticket_number: str
```

- *Type:* str

---

##### `ticket_system`<sup>Required</sup> <a name="ticket_system" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.ticketSystem"></a>

```python
ticket_system: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrivilegedAccessGroupEligibilityScheduleConfig <a name="PrivilegedAccessGroupEligibilityScheduleConfig" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import privileged_access_group_eligibility_schedule

privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assignment_type: str,
  group_id: str,
  principal_id: str,
  duration: str = None,
  expiration_date: str = None,
  id: str = None,
  justification: str = None,
  permanent_assignment: typing.Union[bool, IResolvable] = None,
  start_date: str = None,
  ticket_number: str = None,
  ticket_system: str = None,
  timeouts: PrivilegedAccessGroupEligibilityScheduleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.assignmentType">assignment_type</a></code> | <code>str</code> | The ID of the assignment to the group. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.groupId">group_id</a></code> | <code>str</code> | The ID of the Group representing the scope of the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.principalId">principal_id</a></code> | <code>str</code> | The ID of the Principal assigned to the schedule. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.duration">duration</a></code> | <code>str</code> | The duration of the assignment, formatted as an ISO8601 duration string (e.g. P3D for 3 days). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.expirationDate">expiration_date</a></code> | <code>str</code> | The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#id PrivilegedAccessGroupEligibilitySchedule#id}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.justification">justification</a></code> | <code>str</code> | The justification for the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.permanentAssignment">permanent_assignment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the assignment permanent. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.startDate">start_date</a></code> | <code>str</code> | The date that this assignment starts, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.ticketNumber">ticket_number</a></code> | <code>str</code> | The ticket number authorising the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.ticketSystem">ticket_system</a></code> | <code>str</code> | The ticket system authorising the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts">PrivilegedAccessGroupEligibilityScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assignment_type`<sup>Required</sup> <a name="assignment_type" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.assignmentType"></a>

```python
assignment_type: str
```

- *Type:* str

The ID of the assignment to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#assignment_type PrivilegedAccessGroupEligibilitySchedule#assignment_type}

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

The ID of the Group representing the scope of the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#group_id PrivilegedAccessGroupEligibilitySchedule#group_id}

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

The ID of the Principal assigned to the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#principal_id PrivilegedAccessGroupEligibilitySchedule#principal_id}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.duration"></a>

```python
duration: str
```

- *Type:* str

The duration of the assignment, formatted as an ISO8601 duration string (e.g. P3D for 3 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#duration PrivilegedAccessGroupEligibilitySchedule#duration}

---

##### `expiration_date`<sup>Optional</sup> <a name="expiration_date" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#expiration_date PrivilegedAccessGroupEligibilitySchedule#expiration_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#id PrivilegedAccessGroupEligibilitySchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.justification"></a>

```python
justification: str
```

- *Type:* str

The justification for the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#justification PrivilegedAccessGroupEligibilitySchedule#justification}

---

##### `permanent_assignment`<sup>Optional</sup> <a name="permanent_assignment" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.permanentAssignment"></a>

```python
permanent_assignment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the assignment permanent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#permanent_assignment PrivilegedAccessGroupEligibilitySchedule#permanent_assignment}

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

The date that this assignment starts, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#start_date PrivilegedAccessGroupEligibilitySchedule#start_date}

---

##### `ticket_number`<sup>Optional</sup> <a name="ticket_number" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.ticketNumber"></a>

```python
ticket_number: str
```

- *Type:* str

The ticket number authorising the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#ticket_number PrivilegedAccessGroupEligibilitySchedule#ticket_number}

---

##### `ticket_system`<sup>Optional</sup> <a name="ticket_system" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.ticketSystem"></a>

```python
ticket_system: str
```

- *Type:* str

The ticket system authorising the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#ticket_system PrivilegedAccessGroupEligibilitySchedule#ticket_system}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.timeouts"></a>

```python
timeouts: PrivilegedAccessGroupEligibilityScheduleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts">PrivilegedAccessGroupEligibilityScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#timeouts PrivilegedAccessGroupEligibilitySchedule#timeouts}

---

### PrivilegedAccessGroupEligibilityScheduleTimeouts <a name="PrivilegedAccessGroupEligibilityScheduleTimeouts" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import privileged_access_group_eligibility_schedule

privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#create PrivilegedAccessGroupEligibilitySchedule#create}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#delete PrivilegedAccessGroupEligibilitySchedule#delete}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#read PrivilegedAccessGroupEligibilitySchedule#read}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#update PrivilegedAccessGroupEligibilitySchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#create PrivilegedAccessGroupEligibilitySchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#delete PrivilegedAccessGroupEligibilitySchedule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#read PrivilegedAccessGroupEligibilitySchedule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/privileged_access_group_eligibility_schedule#update PrivilegedAccessGroupEligibilitySchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference <a name="PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import privileged_access_group_eligibility_schedule

privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts">PrivilegedAccessGroupEligibilityScheduleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrivilegedAccessGroupEligibilityScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts">PrivilegedAccessGroupEligibilityScheduleTimeouts</a>]

---



