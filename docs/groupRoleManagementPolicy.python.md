# `groupRoleManagementPolicy` Submodule <a name="`groupRoleManagementPolicy` Submodule" id="@cdktf/provider-azuread.groupRoleManagementPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupRoleManagementPolicy <a name="GroupRoleManagementPolicy" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy azuread_group_role_management_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_id: str,
  role_id: str,
  activation_rules: GroupRoleManagementPolicyActivationRules = None,
  active_assignment_rules: GroupRoleManagementPolicyActiveAssignmentRules = None,
  eligible_assignment_rules: GroupRoleManagementPolicyEligibleAssignmentRules = None,
  id: str = None,
  notification_rules: GroupRoleManagementPolicyNotificationRules = None,
  timeouts: GroupRoleManagementPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | ID of the group to which this policy is assigned. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.roleId">role_id</a></code> | <code>str</code> | The ID of the role of this policy to the group. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.activationRules">activation_rules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a></code> | activation_rules block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.activeAssignmentRules">active_assignment_rules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a></code> | active_assignment_rules block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.eligibleAssignmentRules">eligible_assignment_rules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a></code> | eligible_assignment_rules block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#id GroupRoleManagementPolicy#id}. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.notificationRules">notification_rules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a></code> | notification_rules block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.groupId"></a>

- *Type:* str

ID of the group to which this policy is assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#group_id GroupRoleManagementPolicy#group_id}

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.roleId"></a>

- *Type:* str

The ID of the role of this policy to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#role_id GroupRoleManagementPolicy#role_id}

---

##### `activation_rules`<sup>Optional</sup> <a name="activation_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.activationRules"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a>

activation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#activation_rules GroupRoleManagementPolicy#activation_rules}

---

##### `active_assignment_rules`<sup>Optional</sup> <a name="active_assignment_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.activeAssignmentRules"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a>

active_assignment_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#active_assignment_rules GroupRoleManagementPolicy#active_assignment_rules}

---

##### `eligible_assignment_rules`<sup>Optional</sup> <a name="eligible_assignment_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.eligibleAssignmentRules"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a>

eligible_assignment_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#eligible_assignment_rules GroupRoleManagementPolicy#eligible_assignment_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#id GroupRoleManagementPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_rules`<sup>Optional</sup> <a name="notification_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.notificationRules"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a>

notification_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_rules GroupRoleManagementPolicy#notification_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#timeouts GroupRoleManagementPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActivationRules">put_activation_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActiveAssignmentRules">put_active_assignment_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putEligibleAssignmentRules">put_eligible_assignment_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putNotificationRules">put_notification_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetActivationRules">reset_activation_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetActiveAssignmentRules">reset_active_assignment_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetEligibleAssignmentRules">reset_eligible_assignment_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetNotificationRules">reset_notification_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_activation_rules` <a name="put_activation_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActivationRules"></a>

```python
def put_activation_rules(
  approval_stage: GroupRoleManagementPolicyActivationRulesApprovalStage = None,
  maximum_duration: str = None,
  require_approval: typing.Union[bool, IResolvable] = None,
  required_conditional_access_authentication_context: str = None,
  require_justification: typing.Union[bool, IResolvable] = None,
  require_multifactor_authentication: typing.Union[bool, IResolvable] = None,
  require_ticket_info: typing.Union[bool, IResolvable] = None
) -> None
```

###### `approval_stage`<sup>Optional</sup> <a name="approval_stage" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActivationRules.parameter.approvalStage"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a>

approval_stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#approval_stage GroupRoleManagementPolicy#approval_stage}

---

###### `maximum_duration`<sup>Optional</sup> <a name="maximum_duration" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActivationRules.parameter.maximumDuration"></a>

- *Type:* str

The time after which the an activation can be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#maximum_duration GroupRoleManagementPolicy#maximum_duration}

---

###### `require_approval`<sup>Optional</sup> <a name="require_approval" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActivationRules.parameter.requireApproval"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an approval is required for activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_approval GroupRoleManagementPolicy#require_approval}

---

###### `required_conditional_access_authentication_context`<sup>Optional</sup> <a name="required_conditional_access_authentication_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActivationRules.parameter.requiredConditionalAccessAuthenticationContext"></a>

- *Type:* str

Whether a conditional access context is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#required_conditional_access_authentication_context GroupRoleManagementPolicy#required_conditional_access_authentication_context}

---

###### `require_justification`<sup>Optional</sup> <a name="require_justification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActivationRules.parameter.requireJustification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a justification is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_justification GroupRoleManagementPolicy#require_justification}

---

###### `require_multifactor_authentication`<sup>Optional</sup> <a name="require_multifactor_authentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActivationRules.parameter.requireMultifactorAuthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether multi-factor authentication is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_multifactor_authentication GroupRoleManagementPolicy#require_multifactor_authentication}

---

###### `require_ticket_info`<sup>Optional</sup> <a name="require_ticket_info" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActivationRules.parameter.requireTicketInfo"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether ticket information is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_ticket_info GroupRoleManagementPolicy#require_ticket_info}

---

##### `put_active_assignment_rules` <a name="put_active_assignment_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActiveAssignmentRules"></a>

```python
def put_active_assignment_rules(
  expiration_required: typing.Union[bool, IResolvable] = None,
  expire_after: str = None,
  require_justification: typing.Union[bool, IResolvable] = None,
  require_multifactor_authentication: typing.Union[bool, IResolvable] = None,
  require_ticket_info: typing.Union[bool, IResolvable] = None
) -> None
```

###### `expiration_required`<sup>Optional</sup> <a name="expiration_required" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActiveAssignmentRules.parameter.expirationRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Must the assignment have an expiry date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#expiration_required GroupRoleManagementPolicy#expiration_required}

---

###### `expire_after`<sup>Optional</sup> <a name="expire_after" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActiveAssignmentRules.parameter.expireAfter"></a>

- *Type:* str

The duration after which assignments expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#expire_after GroupRoleManagementPolicy#expire_after}

---

###### `require_justification`<sup>Optional</sup> <a name="require_justification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActiveAssignmentRules.parameter.requireJustification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a justification is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_justification GroupRoleManagementPolicy#require_justification}

---

###### `require_multifactor_authentication`<sup>Optional</sup> <a name="require_multifactor_authentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActiveAssignmentRules.parameter.requireMultifactorAuthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether multi-factor authentication is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_multifactor_authentication GroupRoleManagementPolicy#require_multifactor_authentication}

---

###### `require_ticket_info`<sup>Optional</sup> <a name="require_ticket_info" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActiveAssignmentRules.parameter.requireTicketInfo"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether ticket information is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_ticket_info GroupRoleManagementPolicy#require_ticket_info}

---

##### `put_eligible_assignment_rules` <a name="put_eligible_assignment_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putEligibleAssignmentRules"></a>

```python
def put_eligible_assignment_rules(
  expiration_required: typing.Union[bool, IResolvable] = None,
  expire_after: str = None
) -> None
```

###### `expiration_required`<sup>Optional</sup> <a name="expiration_required" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putEligibleAssignmentRules.parameter.expirationRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Must the assignment have an expiry date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#expiration_required GroupRoleManagementPolicy#expiration_required}

---

###### `expire_after`<sup>Optional</sup> <a name="expire_after" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putEligibleAssignmentRules.parameter.expireAfter"></a>

- *Type:* str

The duration after which assignments expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#expire_after GroupRoleManagementPolicy#expire_after}

---

##### `put_notification_rules` <a name="put_notification_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putNotificationRules"></a>

```python
def put_notification_rules(
  active_assignments: GroupRoleManagementPolicyNotificationRulesActiveAssignments = None,
  eligible_activations: GroupRoleManagementPolicyNotificationRulesEligibleActivations = None,
  eligible_assignments: GroupRoleManagementPolicyNotificationRulesEligibleAssignments = None
) -> None
```

###### `active_assignments`<sup>Optional</sup> <a name="active_assignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putNotificationRules.parameter.activeAssignments"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a>

active_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#active_assignments GroupRoleManagementPolicy#active_assignments}

---

###### `eligible_activations`<sup>Optional</sup> <a name="eligible_activations" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putNotificationRules.parameter.eligibleActivations"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a>

eligible_activations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#eligible_activations GroupRoleManagementPolicy#eligible_activations}

---

###### `eligible_assignments`<sup>Optional</sup> <a name="eligible_assignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putNotificationRules.parameter.eligibleAssignments"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a>

eligible_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#eligible_assignments GroupRoleManagementPolicy#eligible_assignments}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#create GroupRoleManagementPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#delete GroupRoleManagementPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#read GroupRoleManagementPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#update GroupRoleManagementPolicy#update}.

---

##### `reset_activation_rules` <a name="reset_activation_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetActivationRules"></a>

```python
def reset_activation_rules() -> None
```

##### `reset_active_assignment_rules` <a name="reset_active_assignment_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetActiveAssignmentRules"></a>

```python
def reset_active_assignment_rules() -> None
```

##### `reset_eligible_assignment_rules` <a name="reset_eligible_assignment_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetEligibleAssignmentRules"></a>

```python
def reset_eligible_assignment_rules() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notification_rules` <a name="reset_notification_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetNotificationRules"></a>

```python
def reset_notification_rules() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GroupRoleManagementPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GroupRoleManagementPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GroupRoleManagementPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GroupRoleManagementPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupRoleManagementPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activationRules">activation_rules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference">GroupRoleManagementPolicyActivationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activeAssignmentRules">active_assignment_rules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference">GroupRoleManagementPolicyActiveAssignmentRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.eligibleAssignmentRules">eligible_assignment_rules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference">GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.notificationRules">notification_rules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference">GroupRoleManagementPolicyNotificationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference">GroupRoleManagementPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activationRulesInput">activation_rules_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activeAssignmentRulesInput">active_assignment_rules_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.eligibleAssignmentRulesInput">eligible_assignment_rules_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.notificationRulesInput">notification_rules_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `activation_rules`<sup>Required</sup> <a name="activation_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activationRules"></a>

```python
activation_rules: GroupRoleManagementPolicyActivationRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference">GroupRoleManagementPolicyActivationRulesOutputReference</a>

---

##### `active_assignment_rules`<sup>Required</sup> <a name="active_assignment_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activeAssignmentRules"></a>

```python
active_assignment_rules: GroupRoleManagementPolicyActiveAssignmentRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference">GroupRoleManagementPolicyActiveAssignmentRulesOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `eligible_assignment_rules`<sup>Required</sup> <a name="eligible_assignment_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.eligibleAssignmentRules"></a>

```python
eligible_assignment_rules: GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference">GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference</a>

---

##### `notification_rules`<sup>Required</sup> <a name="notification_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.notificationRules"></a>

```python
notification_rules: GroupRoleManagementPolicyNotificationRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference">GroupRoleManagementPolicyNotificationRulesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.timeouts"></a>

```python
timeouts: GroupRoleManagementPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference">GroupRoleManagementPolicyTimeoutsOutputReference</a>

---

##### `activation_rules_input`<sup>Optional</sup> <a name="activation_rules_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activationRulesInput"></a>

```python
activation_rules_input: GroupRoleManagementPolicyActivationRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a>

---

##### `active_assignment_rules_input`<sup>Optional</sup> <a name="active_assignment_rules_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activeAssignmentRulesInput"></a>

```python
active_assignment_rules_input: GroupRoleManagementPolicyActiveAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a>

---

##### `eligible_assignment_rules_input`<sup>Optional</sup> <a name="eligible_assignment_rules_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.eligibleAssignmentRulesInput"></a>

```python
eligible_assignment_rules_input: GroupRoleManagementPolicyEligibleAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a>

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `notification_rules_input`<sup>Optional</sup> <a name="notification_rules_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.notificationRulesInput"></a>

```python
notification_rules_input: GroupRoleManagementPolicyNotificationRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a>

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GroupRoleManagementPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a>]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupRoleManagementPolicyActivationRules <a name="GroupRoleManagementPolicyActivationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules(
  approval_stage: GroupRoleManagementPolicyActivationRulesApprovalStage = None,
  maximum_duration: str = None,
  require_approval: typing.Union[bool, IResolvable] = None,
  required_conditional_access_authentication_context: str = None,
  require_justification: typing.Union[bool, IResolvable] = None,
  require_multifactor_authentication: typing.Union[bool, IResolvable] = None,
  require_ticket_info: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.approvalStage">approval_stage</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a></code> | approval_stage block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.maximumDuration">maximum_duration</a></code> | <code>str</code> | The time after which the an activation can be valid for. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireApproval">require_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether an approval is required for activation. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requiredConditionalAccessAuthenticationContext">required_conditional_access_authentication_context</a></code> | <code>str</code> | Whether a conditional access context is required during activation. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireJustification">require_justification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether a justification is required during activation. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireMultifactorAuthentication">require_multifactor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether multi-factor authentication is required during activation. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireTicketInfo">require_ticket_info</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether ticket information is required during activation. |

---

##### `approval_stage`<sup>Optional</sup> <a name="approval_stage" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.approvalStage"></a>

```python
approval_stage: GroupRoleManagementPolicyActivationRulesApprovalStage
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a>

approval_stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#approval_stage GroupRoleManagementPolicy#approval_stage}

---

##### `maximum_duration`<sup>Optional</sup> <a name="maximum_duration" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.maximumDuration"></a>

```python
maximum_duration: str
```

- *Type:* str

The time after which the an activation can be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#maximum_duration GroupRoleManagementPolicy#maximum_duration}

---

##### `require_approval`<sup>Optional</sup> <a name="require_approval" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireApproval"></a>

```python
require_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an approval is required for activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_approval GroupRoleManagementPolicy#require_approval}

---

##### `required_conditional_access_authentication_context`<sup>Optional</sup> <a name="required_conditional_access_authentication_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requiredConditionalAccessAuthenticationContext"></a>

```python
required_conditional_access_authentication_context: str
```

- *Type:* str

Whether a conditional access context is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#required_conditional_access_authentication_context GroupRoleManagementPolicy#required_conditional_access_authentication_context}

---

##### `require_justification`<sup>Optional</sup> <a name="require_justification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireJustification"></a>

```python
require_justification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a justification is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_justification GroupRoleManagementPolicy#require_justification}

---

##### `require_multifactor_authentication`<sup>Optional</sup> <a name="require_multifactor_authentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireMultifactorAuthentication"></a>

```python
require_multifactor_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether multi-factor authentication is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_multifactor_authentication GroupRoleManagementPolicy#require_multifactor_authentication}

---

##### `require_ticket_info`<sup>Optional</sup> <a name="require_ticket_info" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireTicketInfo"></a>

```python
require_ticket_info: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether ticket information is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_ticket_info GroupRoleManagementPolicy#require_ticket_info}

---

### GroupRoleManagementPolicyActivationRulesApprovalStage <a name="GroupRoleManagementPolicyActivationRulesApprovalStage" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage(
  primary_approver: typing.Union[IResolvable, typing.List[GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage.property.primaryApprover">primary_approver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]]</code> | primary_approver block. |

---

##### `primary_approver`<sup>Required</sup> <a name="primary_approver" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage.property.primaryApprover"></a>

```python
primary_approver: typing.Union[IResolvable, typing.List[GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]]

primary_approver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#primary_approver GroupRoleManagementPolicy#primary_approver}

---

### GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover <a name="GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover(
  object_id: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.objectId">object_id</a></code> | <code>str</code> | The ID of the object to act as an approver. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.type">type</a></code> | <code>str</code> | The type of object acting as an approver. |

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

The ID of the object to act as an approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#object_id GroupRoleManagementPolicy#object_id}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.type"></a>

```python
type: str
```

- *Type:* str

The type of object acting as an approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#type GroupRoleManagementPolicy#type}

---

### GroupRoleManagementPolicyActiveAssignmentRules <a name="GroupRoleManagementPolicyActiveAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules(
  expiration_required: typing.Union[bool, IResolvable] = None,
  expire_after: str = None,
  require_justification: typing.Union[bool, IResolvable] = None,
  require_multifactor_authentication: typing.Union[bool, IResolvable] = None,
  require_ticket_info: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.expirationRequired">expiration_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Must the assignment have an expiry date. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.expireAfter">expire_after</a></code> | <code>str</code> | The duration after which assignments expire. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireJustification">require_justification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether a justification is required to make an assignment. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireMultifactorAuthentication">require_multifactor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether multi-factor authentication is required to make an assignment. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireTicketInfo">require_ticket_info</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether ticket information is required to make an assignment. |

---

##### `expiration_required`<sup>Optional</sup> <a name="expiration_required" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.expirationRequired"></a>

```python
expiration_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Must the assignment have an expiry date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#expiration_required GroupRoleManagementPolicy#expiration_required}

---

##### `expire_after`<sup>Optional</sup> <a name="expire_after" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.expireAfter"></a>

```python
expire_after: str
```

- *Type:* str

The duration after which assignments expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#expire_after GroupRoleManagementPolicy#expire_after}

---

##### `require_justification`<sup>Optional</sup> <a name="require_justification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireJustification"></a>

```python
require_justification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a justification is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_justification GroupRoleManagementPolicy#require_justification}

---

##### `require_multifactor_authentication`<sup>Optional</sup> <a name="require_multifactor_authentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireMultifactorAuthentication"></a>

```python
require_multifactor_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether multi-factor authentication is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_multifactor_authentication GroupRoleManagementPolicy#require_multifactor_authentication}

---

##### `require_ticket_info`<sup>Optional</sup> <a name="require_ticket_info" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireTicketInfo"></a>

```python
require_ticket_info: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether ticket information is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_ticket_info GroupRoleManagementPolicy#require_ticket_info}

---

### GroupRoleManagementPolicyConfig <a name="GroupRoleManagementPolicyConfig" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_id: str,
  role_id: str,
  activation_rules: GroupRoleManagementPolicyActivationRules = None,
  active_assignment_rules: GroupRoleManagementPolicyActiveAssignmentRules = None,
  eligible_assignment_rules: GroupRoleManagementPolicyEligibleAssignmentRules = None,
  id: str = None,
  notification_rules: GroupRoleManagementPolicyNotificationRules = None,
  timeouts: GroupRoleManagementPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.groupId">group_id</a></code> | <code>str</code> | ID of the group to which this policy is assigned. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.roleId">role_id</a></code> | <code>str</code> | The ID of the role of this policy to the group. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.activationRules">activation_rules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a></code> | activation_rules block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.activeAssignmentRules">active_assignment_rules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a></code> | active_assignment_rules block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.eligibleAssignmentRules">eligible_assignment_rules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a></code> | eligible_assignment_rules block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#id GroupRoleManagementPolicy#id}. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.notificationRules">notification_rules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a></code> | notification_rules block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

ID of the group to which this policy is assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#group_id GroupRoleManagementPolicy#group_id}

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

The ID of the role of this policy to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#role_id GroupRoleManagementPolicy#role_id}

---

##### `activation_rules`<sup>Optional</sup> <a name="activation_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.activationRules"></a>

```python
activation_rules: GroupRoleManagementPolicyActivationRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a>

activation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#activation_rules GroupRoleManagementPolicy#activation_rules}

---

##### `active_assignment_rules`<sup>Optional</sup> <a name="active_assignment_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.activeAssignmentRules"></a>

```python
active_assignment_rules: GroupRoleManagementPolicyActiveAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a>

active_assignment_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#active_assignment_rules GroupRoleManagementPolicy#active_assignment_rules}

---

##### `eligible_assignment_rules`<sup>Optional</sup> <a name="eligible_assignment_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.eligibleAssignmentRules"></a>

```python
eligible_assignment_rules: GroupRoleManagementPolicyEligibleAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a>

eligible_assignment_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#eligible_assignment_rules GroupRoleManagementPolicy#eligible_assignment_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#id GroupRoleManagementPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_rules`<sup>Optional</sup> <a name="notification_rules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.notificationRules"></a>

```python
notification_rules: GroupRoleManagementPolicyNotificationRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a>

notification_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_rules GroupRoleManagementPolicy#notification_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.timeouts"></a>

```python
timeouts: GroupRoleManagementPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#timeouts GroupRoleManagementPolicy#timeouts}

---

### GroupRoleManagementPolicyEligibleAssignmentRules <a name="GroupRoleManagementPolicyEligibleAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules(
  expiration_required: typing.Union[bool, IResolvable] = None,
  expire_after: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules.property.expirationRequired">expiration_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Must the assignment have an expiry date. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules.property.expireAfter">expire_after</a></code> | <code>str</code> | The duration after which assignments expire. |

---

##### `expiration_required`<sup>Optional</sup> <a name="expiration_required" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules.property.expirationRequired"></a>

```python
expiration_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Must the assignment have an expiry date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#expiration_required GroupRoleManagementPolicy#expiration_required}

---

##### `expire_after`<sup>Optional</sup> <a name="expire_after" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules.property.expireAfter"></a>

```python
expire_after: str
```

- *Type:* str

The duration after which assignments expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#expire_after GroupRoleManagementPolicy#expire_after}

---

### GroupRoleManagementPolicyNotificationRules <a name="GroupRoleManagementPolicyNotificationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules(
  active_assignments: GroupRoleManagementPolicyNotificationRulesActiveAssignments = None,
  eligible_activations: GroupRoleManagementPolicyNotificationRulesEligibleActivations = None,
  eligible_assignments: GroupRoleManagementPolicyNotificationRulesEligibleAssignments = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.activeAssignments">active_assignments</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a></code> | active_assignments block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.eligibleActivations">eligible_activations</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a></code> | eligible_activations block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.eligibleAssignments">eligible_assignments</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a></code> | eligible_assignments block. |

---

##### `active_assignments`<sup>Optional</sup> <a name="active_assignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.activeAssignments"></a>

```python
active_assignments: GroupRoleManagementPolicyNotificationRulesActiveAssignments
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a>

active_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#active_assignments GroupRoleManagementPolicy#active_assignments}

---

##### `eligible_activations`<sup>Optional</sup> <a name="eligible_activations" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.eligibleActivations"></a>

```python
eligible_activations: GroupRoleManagementPolicyNotificationRulesEligibleActivations
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a>

eligible_activations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#eligible_activations GroupRoleManagementPolicy#eligible_activations}

---

##### `eligible_assignments`<sup>Optional</sup> <a name="eligible_assignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.eligibleAssignments"></a>

```python
eligible_assignments: GroupRoleManagementPolicyNotificationRulesEligibleAssignments
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a>

eligible_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#eligible_assignments GroupRoleManagementPolicy#eligible_assignments}

---

### GroupRoleManagementPolicyNotificationRulesActiveAssignments <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments(
  admin_notifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications = None,
  approver_notifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications = None,
  assignee_notifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.adminNotifications">admin_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.approverNotifications">approver_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.assigneeNotifications">assignee_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a></code> | assignee_notifications block. |

---

##### `admin_notifications`<sup>Optional</sup> <a name="admin_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.adminNotifications"></a>

```python
admin_notifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#admin_notifications GroupRoleManagementPolicy#admin_notifications}

---

##### `approver_notifications`<sup>Optional</sup> <a name="approver_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.approverNotifications"></a>

```python
approver_notifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#approver_notifications GroupRoleManagementPolicy#approver_notifications}

---

##### `assignee_notifications`<sup>Optional</sup> <a name="assignee_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.assigneeNotifications"></a>

```python
assignee_notifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#assignee_notifications GroupRoleManagementPolicy#assignee_notifications}

---

### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleActivations <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivations" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations(
  admin_notifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications = None,
  approver_notifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications = None,
  assignee_notifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.adminNotifications">admin_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.approverNotifications">approver_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.assigneeNotifications">assignee_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a></code> | assignee_notifications block. |

---

##### `admin_notifications`<sup>Optional</sup> <a name="admin_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.adminNotifications"></a>

```python
admin_notifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#admin_notifications GroupRoleManagementPolicy#admin_notifications}

---

##### `approver_notifications`<sup>Optional</sup> <a name="approver_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.approverNotifications"></a>

```python
approver_notifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#approver_notifications GroupRoleManagementPolicy#approver_notifications}

---

##### `assignee_notifications`<sup>Optional</sup> <a name="assignee_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.assigneeNotifications"></a>

```python
assignee_notifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#assignee_notifications GroupRoleManagementPolicy#assignee_notifications}

---

### GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleAssignments <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments(
  admin_notifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications = None,
  approver_notifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications = None,
  assignee_notifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.adminNotifications">admin_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.approverNotifications">approver_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.assigneeNotifications">assignee_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a></code> | assignee_notifications block. |

---

##### `admin_notifications`<sup>Optional</sup> <a name="admin_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.adminNotifications"></a>

```python
admin_notifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#admin_notifications GroupRoleManagementPolicy#admin_notifications}

---

##### `approver_notifications`<sup>Optional</sup> <a name="approver_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.approverNotifications"></a>

```python
approver_notifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#approver_notifications GroupRoleManagementPolicy#approver_notifications}

---

##### `assignee_notifications`<sup>Optional</sup> <a name="assignee_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.assigneeNotifications"></a>

```python
assignee_notifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#assignee_notifications GroupRoleManagementPolicy#assignee_notifications}

---

### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyTimeouts <a name="GroupRoleManagementPolicyTimeouts" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#create GroupRoleManagementPolicy#create}. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#delete GroupRoleManagementPolicy#delete}. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#read GroupRoleManagementPolicy#read}. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#update GroupRoleManagementPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#create GroupRoleManagementPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#delete GroupRoleManagementPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#read GroupRoleManagementPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#update GroupRoleManagementPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference <a name="GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.putPrimaryApprover">put_primary_approver</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_primary_approver` <a name="put_primary_approver" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.putPrimaryApprover"></a>

```python
def put_primary_approver(
  value: typing.Union[IResolvable, typing.List[GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.putPrimaryApprover.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApprover">primary_approver</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApproverInput">primary_approver_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_approver`<sup>Required</sup> <a name="primary_approver" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApprover"></a>

```python
primary_approver: GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList</a>

---

##### `primary_approver_input`<sup>Optional</sup> <a name="primary_approver_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApproverInput"></a>

```python
primary_approver_input: typing.Union[IResolvable, typing.List[GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyActivationRulesApprovalStage
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a>

---


### GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList <a name="GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]]

---


### GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference <a name="GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]

---


### GroupRoleManagementPolicyActivationRulesOutputReference <a name="GroupRoleManagementPolicyActivationRulesOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.putApprovalStage">put_approval_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetApprovalStage">reset_approval_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetMaximumDuration">reset_maximum_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireApproval">reset_require_approval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequiredConditionalAccessAuthenticationContext">reset_required_conditional_access_authentication_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireJustification">reset_require_justification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireMultifactorAuthentication">reset_require_multifactor_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireTicketInfo">reset_require_ticket_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_approval_stage` <a name="put_approval_stage" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.putApprovalStage"></a>

```python
def put_approval_stage(
  primary_approver: typing.Union[IResolvable, typing.List[GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover]]
) -> None
```

###### `primary_approver`<sup>Required</sup> <a name="primary_approver" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.putApprovalStage.parameter.primaryApprover"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]]

primary_approver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#primary_approver GroupRoleManagementPolicy#primary_approver}

---

##### `reset_approval_stage` <a name="reset_approval_stage" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetApprovalStage"></a>

```python
def reset_approval_stage() -> None
```

##### `reset_maximum_duration` <a name="reset_maximum_duration" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetMaximumDuration"></a>

```python
def reset_maximum_duration() -> None
```

##### `reset_require_approval` <a name="reset_require_approval" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireApproval"></a>

```python
def reset_require_approval() -> None
```

##### `reset_required_conditional_access_authentication_context` <a name="reset_required_conditional_access_authentication_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequiredConditionalAccessAuthenticationContext"></a>

```python
def reset_required_conditional_access_authentication_context() -> None
```

##### `reset_require_justification` <a name="reset_require_justification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireJustification"></a>

```python
def reset_require_justification() -> None
```

##### `reset_require_multifactor_authentication` <a name="reset_require_multifactor_authentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireMultifactorAuthentication"></a>

```python
def reset_require_multifactor_authentication() -> None
```

##### `reset_require_ticket_info` <a name="reset_require_ticket_info" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireTicketInfo"></a>

```python
def reset_require_ticket_info() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.approvalStage">approval_stage</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference">GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.approvalStageInput">approval_stage_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.maximumDurationInput">maximum_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireApprovalInput">require_approval_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContextInput">required_conditional_access_authentication_context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireJustificationInput">require_justification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthenticationInput">require_multifactor_authentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfoInput">require_ticket_info_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.maximumDuration">maximum_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireApproval">require_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContext">required_conditional_access_authentication_context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireJustification">require_justification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthentication">require_multifactor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfo">require_ticket_info</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_stage`<sup>Required</sup> <a name="approval_stage" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.approvalStage"></a>

```python
approval_stage: GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference">GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference</a>

---

##### `approval_stage_input`<sup>Optional</sup> <a name="approval_stage_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.approvalStageInput"></a>

```python
approval_stage_input: GroupRoleManagementPolicyActivationRulesApprovalStage
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a>

---

##### `maximum_duration_input`<sup>Optional</sup> <a name="maximum_duration_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.maximumDurationInput"></a>

```python
maximum_duration_input: str
```

- *Type:* str

---

##### `require_approval_input`<sup>Optional</sup> <a name="require_approval_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireApprovalInput"></a>

```python
require_approval_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_conditional_access_authentication_context_input`<sup>Optional</sup> <a name="required_conditional_access_authentication_context_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContextInput"></a>

```python
required_conditional_access_authentication_context_input: str
```

- *Type:* str

---

##### `require_justification_input`<sup>Optional</sup> <a name="require_justification_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireJustificationInput"></a>

```python
require_justification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_multifactor_authentication_input`<sup>Optional</sup> <a name="require_multifactor_authentication_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthenticationInput"></a>

```python
require_multifactor_authentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_ticket_info_input`<sup>Optional</sup> <a name="require_ticket_info_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfoInput"></a>

```python
require_ticket_info_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maximum_duration`<sup>Required</sup> <a name="maximum_duration" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.maximumDuration"></a>

```python
maximum_duration: str
```

- *Type:* str

---

##### `require_approval`<sup>Required</sup> <a name="require_approval" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireApproval"></a>

```python
require_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_conditional_access_authentication_context`<sup>Required</sup> <a name="required_conditional_access_authentication_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContext"></a>

```python
required_conditional_access_authentication_context: str
```

- *Type:* str

---

##### `require_justification`<sup>Required</sup> <a name="require_justification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireJustification"></a>

```python
require_justification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_multifactor_authentication`<sup>Required</sup> <a name="require_multifactor_authentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthentication"></a>

```python
require_multifactor_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_ticket_info`<sup>Required</sup> <a name="require_ticket_info" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfo"></a>

```python
require_ticket_info: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyActivationRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a>

---


### GroupRoleManagementPolicyActiveAssignmentRulesOutputReference <a name="GroupRoleManagementPolicyActiveAssignmentRulesOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpirationRequired">reset_expiration_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpireAfter">reset_expire_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireJustification">reset_require_justification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireMultifactorAuthentication">reset_require_multifactor_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireTicketInfo">reset_require_ticket_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration_required` <a name="reset_expiration_required" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpirationRequired"></a>

```python
def reset_expiration_required() -> None
```

##### `reset_expire_after` <a name="reset_expire_after" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpireAfter"></a>

```python
def reset_expire_after() -> None
```

##### `reset_require_justification` <a name="reset_require_justification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireJustification"></a>

```python
def reset_require_justification() -> None
```

##### `reset_require_multifactor_authentication` <a name="reset_require_multifactor_authentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireMultifactorAuthentication"></a>

```python
def reset_require_multifactor_authentication() -> None
```

##### `reset_require_ticket_info` <a name="reset_require_ticket_info" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireTicketInfo"></a>

```python
def reset_require_ticket_info() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequiredInput">expiration_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfterInput">expire_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustificationInput">require_justification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthenticationInput">require_multifactor_authentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfoInput">require_ticket_info_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequired">expiration_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfter">expire_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustification">require_justification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthentication">require_multifactor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfo">require_ticket_info</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_required_input`<sup>Optional</sup> <a name="expiration_required_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequiredInput"></a>

```python
expiration_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expire_after_input`<sup>Optional</sup> <a name="expire_after_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfterInput"></a>

```python
expire_after_input: str
```

- *Type:* str

---

##### `require_justification_input`<sup>Optional</sup> <a name="require_justification_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustificationInput"></a>

```python
require_justification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_multifactor_authentication_input`<sup>Optional</sup> <a name="require_multifactor_authentication_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthenticationInput"></a>

```python
require_multifactor_authentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_ticket_info_input`<sup>Optional</sup> <a name="require_ticket_info_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfoInput"></a>

```python
require_ticket_info_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_required`<sup>Required</sup> <a name="expiration_required" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequired"></a>

```python
expiration_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expire_after`<sup>Required</sup> <a name="expire_after" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfter"></a>

```python
expire_after: str
```

- *Type:* str

---

##### `require_justification`<sup>Required</sup> <a name="require_justification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustification"></a>

```python
require_justification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_multifactor_authentication`<sup>Required</sup> <a name="require_multifactor_authentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthentication"></a>

```python
require_multifactor_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_ticket_info`<sup>Required</sup> <a name="require_ticket_info" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfo"></a>

```python
require_ticket_info: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyActiveAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a>

---


### GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference <a name="GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpirationRequired">reset_expiration_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpireAfter">reset_expire_after</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration_required` <a name="reset_expiration_required" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpirationRequired"></a>

```python
def reset_expiration_required() -> None
```

##### `reset_expire_after` <a name="reset_expire_after" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpireAfter"></a>

```python
def reset_expire_after() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequiredInput">expiration_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfterInput">expire_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequired">expiration_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfter">expire_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_required_input`<sup>Optional</sup> <a name="expiration_required_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequiredInput"></a>

```python
expiration_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expire_after_input`<sup>Optional</sup> <a name="expire_after_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfterInput"></a>

```python
expire_after_input: str
```

- *Type:* str

---

##### `expiration_required`<sup>Required</sup> <a name="expiration_required" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequired"></a>

```python
expiration_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expire_after`<sup>Required</sup> <a name="expire_after" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfter"></a>

```python
expire_after: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyEligibleAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a>

---


### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications">put_admin_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications">put_approver_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications">put_assignee_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAdminNotifications">reset_admin_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetApproverNotifications">reset_approver_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAssigneeNotifications">reset_assignee_notifications</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_admin_notifications` <a name="put_admin_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications"></a>

```python
def put_admin_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

##### `put_approver_notifications` <a name="put_approver_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications"></a>

```python
def put_approver_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

##### `put_assignee_notifications` <a name="put_assignee_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications"></a>

```python
def put_assignee_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

##### `reset_admin_notifications` <a name="reset_admin_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAdminNotifications"></a>

```python
def reset_admin_notifications() -> None
```

##### `reset_approver_notifications` <a name="reset_approver_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetApproverNotifications"></a>

```python
def reset_approver_notifications() -> None
```

##### `reset_assignee_notifications` <a name="reset_assignee_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAssigneeNotifications"></a>

```python
def reset_assignee_notifications() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotifications">admin_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotifications">approver_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotifications">assignee_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotificationsInput">admin_notifications_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotificationsInput">approver_notifications_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotificationsInput">assignee_notifications_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_notifications`<sup>Required</sup> <a name="admin_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotifications"></a>

```python
admin_notifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference</a>

---

##### `approver_notifications`<sup>Required</sup> <a name="approver_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotifications"></a>

```python
approver_notifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference</a>

---

##### `assignee_notifications`<sup>Required</sup> <a name="assignee_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotifications"></a>

```python
assignee_notifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference</a>

---

##### `admin_notifications_input`<sup>Optional</sup> <a name="admin_notifications_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotificationsInput"></a>

```python
admin_notifications_input: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

---

##### `approver_notifications_input`<sup>Optional</sup> <a name="approver_notifications_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotificationsInput"></a>

```python
approver_notifications_input: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

---

##### `assignee_notifications_input`<sup>Optional</sup> <a name="assignee_notifications_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotificationsInput"></a>

```python
assignee_notifications_input: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyNotificationRulesActiveAssignments
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications">put_admin_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications">put_approver_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications">put_assignee_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAdminNotifications">reset_admin_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetApproverNotifications">reset_approver_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAssigneeNotifications">reset_assignee_notifications</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_admin_notifications` <a name="put_admin_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications"></a>

```python
def put_admin_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

##### `put_approver_notifications` <a name="put_approver_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications"></a>

```python
def put_approver_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

##### `put_assignee_notifications` <a name="put_assignee_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications"></a>

```python
def put_assignee_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

##### `reset_admin_notifications` <a name="reset_admin_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAdminNotifications"></a>

```python
def reset_admin_notifications() -> None
```

##### `reset_approver_notifications` <a name="reset_approver_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetApproverNotifications"></a>

```python
def reset_approver_notifications() -> None
```

##### `reset_assignee_notifications` <a name="reset_assignee_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAssigneeNotifications"></a>

```python
def reset_assignee_notifications() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotifications">admin_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotifications">approver_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotifications">assignee_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotificationsInput">admin_notifications_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotificationsInput">approver_notifications_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotificationsInput">assignee_notifications_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_notifications`<sup>Required</sup> <a name="admin_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotifications"></a>

```python
admin_notifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference</a>

---

##### `approver_notifications`<sup>Required</sup> <a name="approver_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotifications"></a>

```python
approver_notifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference</a>

---

##### `assignee_notifications`<sup>Required</sup> <a name="assignee_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotifications"></a>

```python
assignee_notifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference</a>

---

##### `admin_notifications_input`<sup>Optional</sup> <a name="admin_notifications_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotificationsInput"></a>

```python
admin_notifications_input: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

---

##### `approver_notifications_input`<sup>Optional</sup> <a name="approver_notifications_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotificationsInput"></a>

```python
approver_notifications_input: GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

---

##### `assignee_notifications_input`<sup>Optional</sup> <a name="assignee_notifications_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotificationsInput"></a>

```python
assignee_notifications_input: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyNotificationRulesEligibleActivations
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications">put_admin_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications">put_approver_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications">put_assignee_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAdminNotifications">reset_admin_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetApproverNotifications">reset_approver_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAssigneeNotifications">reset_assignee_notifications</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_admin_notifications` <a name="put_admin_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications"></a>

```python
def put_admin_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

##### `put_approver_notifications` <a name="put_approver_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications"></a>

```python
def put_approver_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

##### `put_assignee_notifications` <a name="put_assignee_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications"></a>

```python
def put_assignee_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

##### `reset_admin_notifications` <a name="reset_admin_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAdminNotifications"></a>

```python
def reset_admin_notifications() -> None
```

##### `reset_approver_notifications` <a name="reset_approver_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetApproverNotifications"></a>

```python
def reset_approver_notifications() -> None
```

##### `reset_assignee_notifications` <a name="reset_assignee_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAssigneeNotifications"></a>

```python
def reset_assignee_notifications() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotifications">admin_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotifications">approver_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotifications">assignee_notifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotificationsInput">admin_notifications_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotificationsInput">approver_notifications_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotificationsInput">assignee_notifications_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_notifications`<sup>Required</sup> <a name="admin_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotifications"></a>

```python
admin_notifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference</a>

---

##### `approver_notifications`<sup>Required</sup> <a name="approver_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotifications"></a>

```python
approver_notifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference</a>

---

##### `assignee_notifications`<sup>Required</sup> <a name="assignee_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotifications"></a>

```python
assignee_notifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference</a>

---

##### `admin_notifications_input`<sup>Optional</sup> <a name="admin_notifications_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotificationsInput"></a>

```python
admin_notifications_input: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

---

##### `approver_notifications_input`<sup>Optional</sup> <a name="approver_notifications_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotificationsInput"></a>

```python
approver_notifications_input: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

---

##### `assignee_notifications_input`<sup>Optional</sup> <a name="assignee_notifications_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotificationsInput"></a>

```python
assignee_notifications_input: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyNotificationRulesEligibleAssignments
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a>

---


### GroupRoleManagementPolicyNotificationRulesOutputReference <a name="GroupRoleManagementPolicyNotificationRulesOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments">put_active_assignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations">put_eligible_activations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments">put_eligible_assignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetActiveAssignments">reset_active_assignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetEligibleActivations">reset_eligible_activations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetEligibleAssignments">reset_eligible_assignments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_active_assignments` <a name="put_active_assignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments"></a>

```python
def put_active_assignments(
  admin_notifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications = None,
  approver_notifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications = None,
  assignee_notifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications = None
) -> None
```

###### `admin_notifications`<sup>Optional</sup> <a name="admin_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments.parameter.adminNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#admin_notifications GroupRoleManagementPolicy#admin_notifications}

---

###### `approver_notifications`<sup>Optional</sup> <a name="approver_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments.parameter.approverNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#approver_notifications GroupRoleManagementPolicy#approver_notifications}

---

###### `assignee_notifications`<sup>Optional</sup> <a name="assignee_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments.parameter.assigneeNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#assignee_notifications GroupRoleManagementPolicy#assignee_notifications}

---

##### `put_eligible_activations` <a name="put_eligible_activations" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations"></a>

```python
def put_eligible_activations(
  admin_notifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications = None,
  approver_notifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications = None,
  assignee_notifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications = None
) -> None
```

###### `admin_notifications`<sup>Optional</sup> <a name="admin_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations.parameter.adminNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#admin_notifications GroupRoleManagementPolicy#admin_notifications}

---

###### `approver_notifications`<sup>Optional</sup> <a name="approver_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations.parameter.approverNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#approver_notifications GroupRoleManagementPolicy#approver_notifications}

---

###### `assignee_notifications`<sup>Optional</sup> <a name="assignee_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations.parameter.assigneeNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#assignee_notifications GroupRoleManagementPolicy#assignee_notifications}

---

##### `put_eligible_assignments` <a name="put_eligible_assignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments"></a>

```python
def put_eligible_assignments(
  admin_notifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications = None,
  approver_notifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications = None,
  assignee_notifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications = None
) -> None
```

###### `admin_notifications`<sup>Optional</sup> <a name="admin_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments.parameter.adminNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#admin_notifications GroupRoleManagementPolicy#admin_notifications}

---

###### `approver_notifications`<sup>Optional</sup> <a name="approver_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments.parameter.approverNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#approver_notifications GroupRoleManagementPolicy#approver_notifications}

---

###### `assignee_notifications`<sup>Optional</sup> <a name="assignee_notifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments.parameter.assigneeNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#assignee_notifications GroupRoleManagementPolicy#assignee_notifications}

---

##### `reset_active_assignments` <a name="reset_active_assignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetActiveAssignments"></a>

```python
def reset_active_assignments() -> None
```

##### `reset_eligible_activations` <a name="reset_eligible_activations" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetEligibleActivations"></a>

```python
def reset_eligible_activations() -> None
```

##### `reset_eligible_assignments` <a name="reset_eligible_assignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetEligibleAssignments"></a>

```python
def reset_eligible_assignments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.activeAssignments">active_assignments</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivations">eligible_activations</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignments">eligible_assignments</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.activeAssignmentsInput">active_assignments_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivationsInput">eligible_activations_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignmentsInput">eligible_assignments_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_assignments`<sup>Required</sup> <a name="active_assignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.activeAssignments"></a>

```python
active_assignments: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference</a>

---

##### `eligible_activations`<sup>Required</sup> <a name="eligible_activations" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivations"></a>

```python
eligible_activations: GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference</a>

---

##### `eligible_assignments`<sup>Required</sup> <a name="eligible_assignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignments"></a>

```python
eligible_assignments: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference</a>

---

##### `active_assignments_input`<sup>Optional</sup> <a name="active_assignments_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.activeAssignmentsInput"></a>

```python
active_assignments_input: GroupRoleManagementPolicyNotificationRulesActiveAssignments
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a>

---

##### `eligible_activations_input`<sup>Optional</sup> <a name="eligible_activations_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivationsInput"></a>

```python
eligible_activations_input: GroupRoleManagementPolicyNotificationRulesEligibleActivations
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a>

---

##### `eligible_assignments_input`<sup>Optional</sup> <a name="eligible_assignments_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignmentsInput"></a>

```python
eligible_assignments_input: GroupRoleManagementPolicyNotificationRulesEligibleAssignments
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.internalValue"></a>

```python
internal_value: GroupRoleManagementPolicyNotificationRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a>

---


### GroupRoleManagementPolicyTimeoutsOutputReference <a name="GroupRoleManagementPolicyTimeoutsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_role_management_policy

groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GroupRoleManagementPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a>]

---



