# `applicationPermissionScope` Submodule <a name="`applicationPermissionScope` Submodule" id="@cdktf/provider-azuread.applicationPermissionScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationPermissionScope <a name="ApplicationPermissionScope" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope azuread_application_permission_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_permission_scope

applicationPermissionScope.ApplicationPermissionScope(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  admin_consent_description: str,
  admin_consent_display_name: str,
  application_id: str,
  scope_id: str,
  value: str,
  id: str = None,
  timeouts: ApplicationPermissionScopeTimeouts = None,
  type: str = None,
  user_consent_description: str = None,
  user_consent_display_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.adminConsentDescription">admin_consent_description</a></code> | <code>str</code> | Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.adminConsentDisplayName">admin_consent_display_name</a></code> | <code>str</code> | Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | The resource ID of the application to which this permission scope should be applied. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.scopeId">scope_id</a></code> | <code>str</code> | The unique identifier of the permission scope. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.value">value</a></code> | <code>str</code> | The value that is used for the `scp` claim in OAuth access tokens. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#id ApplicationPermissionScope#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.type">type</a></code> | <code>str</code> | Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.userConsentDescription">user_consent_description</a></code> | <code>str</code> | Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.userConsentDisplayName">user_consent_display_name</a></code> | <code>str</code> | Display name for the delegated permission that appears in the end user consent experience. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `admin_consent_description`<sup>Required</sup> <a name="admin_consent_description" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.adminConsentDescription"></a>

- *Type:* str

Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#admin_consent_description ApplicationPermissionScope#admin_consent_description}

---

##### `admin_consent_display_name`<sup>Required</sup> <a name="admin_consent_display_name" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.adminConsentDisplayName"></a>

- *Type:* str

Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#admin_consent_display_name ApplicationPermissionScope#admin_consent_display_name}

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.applicationId"></a>

- *Type:* str

The resource ID of the application to which this permission scope should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#application_id ApplicationPermissionScope#application_id}

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.scopeId"></a>

- *Type:* str

The unique identifier of the permission scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#scope_id ApplicationPermissionScope#scope_id}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.value"></a>

- *Type:* str

The value that is used for the `scp` claim in OAuth access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#value ApplicationPermissionScope#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#id ApplicationPermissionScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#timeouts ApplicationPermissionScope#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.type"></a>

- *Type:* str

Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#type ApplicationPermissionScope#type}

---

##### `user_consent_description`<sup>Optional</sup> <a name="user_consent_description" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.userConsentDescription"></a>

- *Type:* str

Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#user_consent_description ApplicationPermissionScope#user_consent_description}

---

##### `user_consent_display_name`<sup>Optional</sup> <a name="user_consent_display_name" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.userConsentDisplayName"></a>

- *Type:* str

Display name for the delegated permission that appears in the end user consent experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#user_consent_display_name ApplicationPermissionScope#user_consent_display_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetUserConsentDescription">reset_user_consent_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetUserConsentDisplayName">reset_user_consent_display_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#create ApplicationPermissionScope#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#delete ApplicationPermissionScope#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#read ApplicationPermissionScope#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#update ApplicationPermissionScope#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_user_consent_description` <a name="reset_user_consent_description" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetUserConsentDescription"></a>

```python
def reset_user_consent_description() -> None
```

##### `reset_user_consent_display_name` <a name="reset_user_consent_display_name" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetUserConsentDisplayName"></a>

```python
def reset_user_consent_display_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApplicationPermissionScope resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import application_permission_scope

applicationPermissionScope.ApplicationPermissionScope.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import application_permission_scope

applicationPermissionScope.ApplicationPermissionScope.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import application_permission_scope

applicationPermissionScope.ApplicationPermissionScope.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import application_permission_scope

applicationPermissionScope.ApplicationPermissionScope.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApplicationPermissionScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApplicationPermissionScope to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApplicationPermissionScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationPermissionScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference">ApplicationPermissionScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDescriptionInput">admin_consent_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDisplayNameInput">admin_consent_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.scopeIdInput">scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDescriptionInput">user_consent_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDisplayNameInput">user_consent_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDescription">admin_consent_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDisplayName">admin_consent_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.scopeId">scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDescription">user_consent_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDisplayName">user_consent_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.value">value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.timeouts"></a>

```python
timeouts: ApplicationPermissionScopeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference">ApplicationPermissionScopeTimeoutsOutputReference</a>

---

##### `admin_consent_description_input`<sup>Optional</sup> <a name="admin_consent_description_input" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDescriptionInput"></a>

```python
admin_consent_description_input: str
```

- *Type:* str

---

##### `admin_consent_display_name_input`<sup>Optional</sup> <a name="admin_consent_display_name_input" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDisplayNameInput"></a>

```python
admin_consent_display_name_input: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `scope_id_input`<sup>Optional</sup> <a name="scope_id_input" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.scopeIdInput"></a>

```python
scope_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApplicationPermissionScopeTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_consent_description_input`<sup>Optional</sup> <a name="user_consent_description_input" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDescriptionInput"></a>

```python
user_consent_description_input: str
```

- *Type:* str

---

##### `user_consent_display_name_input`<sup>Optional</sup> <a name="user_consent_display_name_input" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDisplayNameInput"></a>

```python
user_consent_display_name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `admin_consent_description`<sup>Required</sup> <a name="admin_consent_description" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDescription"></a>

```python
admin_consent_description: str
```

- *Type:* str

---

##### `admin_consent_display_name`<sup>Required</sup> <a name="admin_consent_display_name" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDisplayName"></a>

```python
admin_consent_display_name: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_consent_description`<sup>Required</sup> <a name="user_consent_description" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDescription"></a>

```python
user_consent_description: str
```

- *Type:* str

---

##### `user_consent_display_name`<sup>Required</sup> <a name="user_consent_display_name" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDisplayName"></a>

```python
user_consent_display_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.value"></a>

```python
value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationPermissionScopeConfig <a name="ApplicationPermissionScopeConfig" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_permission_scope

applicationPermissionScope.ApplicationPermissionScopeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  admin_consent_description: str,
  admin_consent_display_name: str,
  application_id: str,
  scope_id: str,
  value: str,
  id: str = None,
  timeouts: ApplicationPermissionScopeTimeouts = None,
  type: str = None,
  user_consent_description: str = None,
  user_consent_display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.adminConsentDescription">admin_consent_description</a></code> | <code>str</code> | Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.adminConsentDisplayName">admin_consent_display_name</a></code> | <code>str</code> | Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.applicationId">application_id</a></code> | <code>str</code> | The resource ID of the application to which this permission scope should be applied. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.scopeId">scope_id</a></code> | <code>str</code> | The unique identifier of the permission scope. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.value">value</a></code> | <code>str</code> | The value that is used for the `scp` claim in OAuth access tokens. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#id ApplicationPermissionScope#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.type">type</a></code> | <code>str</code> | Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.userConsentDescription">user_consent_description</a></code> | <code>str</code> | Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.userConsentDisplayName">user_consent_display_name</a></code> | <code>str</code> | Display name for the delegated permission that appears in the end user consent experience. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `admin_consent_description`<sup>Required</sup> <a name="admin_consent_description" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.adminConsentDescription"></a>

```python
admin_consent_description: str
```

- *Type:* str

Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#admin_consent_description ApplicationPermissionScope#admin_consent_description}

---

##### `admin_consent_display_name`<sup>Required</sup> <a name="admin_consent_display_name" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.adminConsentDisplayName"></a>

```python
admin_consent_display_name: str
```

- *Type:* str

Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#admin_consent_display_name ApplicationPermissionScope#admin_consent_display_name}

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

The resource ID of the application to which this permission scope should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#application_id ApplicationPermissionScope#application_id}

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

The unique identifier of the permission scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#scope_id ApplicationPermissionScope#scope_id}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.value"></a>

```python
value: str
```

- *Type:* str

The value that is used for the `scp` claim in OAuth access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#value ApplicationPermissionScope#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#id ApplicationPermissionScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.timeouts"></a>

```python
timeouts: ApplicationPermissionScopeTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#timeouts ApplicationPermissionScope#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#type ApplicationPermissionScope#type}

---

##### `user_consent_description`<sup>Optional</sup> <a name="user_consent_description" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.userConsentDescription"></a>

```python
user_consent_description: str
```

- *Type:* str

Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#user_consent_description ApplicationPermissionScope#user_consent_description}

---

##### `user_consent_display_name`<sup>Optional</sup> <a name="user_consent_display_name" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.userConsentDisplayName"></a>

```python
user_consent_display_name: str
```

- *Type:* str

Display name for the delegated permission that appears in the end user consent experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#user_consent_display_name ApplicationPermissionScope#user_consent_display_name}

---

### ApplicationPermissionScopeTimeouts <a name="ApplicationPermissionScopeTimeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_permission_scope

applicationPermissionScope.ApplicationPermissionScopeTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#create ApplicationPermissionScope#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#delete ApplicationPermissionScope#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#read ApplicationPermissionScope#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#update ApplicationPermissionScope#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#create ApplicationPermissionScope#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#delete ApplicationPermissionScope#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#read ApplicationPermissionScope#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_permission_scope#update ApplicationPermissionScope#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationPermissionScopeTimeoutsOutputReference <a name="ApplicationPermissionScopeTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_permission_scope

applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApplicationPermissionScopeTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a>

---



