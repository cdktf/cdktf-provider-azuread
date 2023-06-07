# `azuread_administrative_unit_role_member`

Refer to the Terraform Registory for docs: [`azuread_administrative_unit_role_member`](https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member).

# `administrativeUnitRoleMember` Submodule <a name="`administrativeUnitRoleMember` Submodule" id="@cdktf/provider-azuread.administrativeUnitRoleMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdministrativeUnitRoleMember <a name="AdministrativeUnitRoleMember" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member azuread_administrative_unit_role_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import administrative_unit_role_member

administrativeUnitRoleMember.AdministrativeUnitRoleMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  administrative_unit_object_id: str,
  member_object_id: str,
  role_object_id: str,
  id: str = None,
  timeouts: AdministrativeUnitRoleMemberTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.administrativeUnitObjectId">administrative_unit_object_id</a></code> | <code>str</code> | The object ID of the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.memberObjectId">member_object_id</a></code> | <code>str</code> | The object ID of the member. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.roleObjectId">role_object_id</a></code> | <code>str</code> | The object ID of the directory role. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#id AdministrativeUnitRoleMember#id}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `administrative_unit_object_id`<sup>Required</sup> <a name="administrative_unit_object_id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.administrativeUnitObjectId"></a>

- *Type:* str

The object ID of the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#administrative_unit_object_id AdministrativeUnitRoleMember#administrative_unit_object_id}

---

##### `member_object_id`<sup>Required</sup> <a name="member_object_id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.memberObjectId"></a>

- *Type:* str

The object ID of the member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#member_object_id AdministrativeUnitRoleMember#member_object_id}

---

##### `role_object_id`<sup>Required</sup> <a name="role_object_id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.roleObjectId"></a>

- *Type:* str

The object ID of the directory role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#role_object_id AdministrativeUnitRoleMember#role_object_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#id AdministrativeUnitRoleMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#timeouts AdministrativeUnitRoleMember#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#create AdministrativeUnitRoleMember#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#delete AdministrativeUnitRoleMember#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#read AdministrativeUnitRoleMember#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#update AdministrativeUnitRoleMember#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import administrative_unit_role_member

administrativeUnitRoleMember.AdministrativeUnitRoleMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import administrative_unit_role_member

administrativeUnitRoleMember.AdministrativeUnitRoleMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import administrative_unit_role_member

administrativeUnitRoleMember.AdministrativeUnitRoleMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference">AdministrativeUnitRoleMemberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.administrativeUnitObjectIdInput">administrative_unit_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.memberObjectIdInput">member_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.roleObjectIdInput">role_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.administrativeUnitObjectId">administrative_unit_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.memberObjectId">member_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.roleObjectId">role_object_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.timeouts"></a>

```python
timeouts: AdministrativeUnitRoleMemberTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference">AdministrativeUnitRoleMemberTimeoutsOutputReference</a>

---

##### `administrative_unit_object_id_input`<sup>Optional</sup> <a name="administrative_unit_object_id_input" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.administrativeUnitObjectIdInput"></a>

```python
administrative_unit_object_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `member_object_id_input`<sup>Optional</sup> <a name="member_object_id_input" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.memberObjectIdInput"></a>

```python
member_object_id_input: str
```

- *Type:* str

---

##### `role_object_id_input`<sup>Optional</sup> <a name="role_object_id_input" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.roleObjectIdInput"></a>

```python
role_object_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[AdministrativeUnitRoleMemberTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a>, cdktf.IResolvable]

---

##### `administrative_unit_object_id`<sup>Required</sup> <a name="administrative_unit_object_id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.administrativeUnitObjectId"></a>

```python
administrative_unit_object_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member_object_id`<sup>Required</sup> <a name="member_object_id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.memberObjectId"></a>

```python
member_object_id: str
```

- *Type:* str

---

##### `role_object_id`<sup>Required</sup> <a name="role_object_id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.roleObjectId"></a>

```python
role_object_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AdministrativeUnitRoleMemberConfig <a name="AdministrativeUnitRoleMemberConfig" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import administrative_unit_role_member

administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  administrative_unit_object_id: str,
  member_object_id: str,
  role_object_id: str,
  id: str = None,
  timeouts: AdministrativeUnitRoleMemberTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.administrativeUnitObjectId">administrative_unit_object_id</a></code> | <code>str</code> | The object ID of the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.memberObjectId">member_object_id</a></code> | <code>str</code> | The object ID of the member. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.roleObjectId">role_object_id</a></code> | <code>str</code> | The object ID of the directory role. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#id AdministrativeUnitRoleMember#id}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `administrative_unit_object_id`<sup>Required</sup> <a name="administrative_unit_object_id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.administrativeUnitObjectId"></a>

```python
administrative_unit_object_id: str
```

- *Type:* str

The object ID of the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#administrative_unit_object_id AdministrativeUnitRoleMember#administrative_unit_object_id}

---

##### `member_object_id`<sup>Required</sup> <a name="member_object_id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.memberObjectId"></a>

```python
member_object_id: str
```

- *Type:* str

The object ID of the member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#member_object_id AdministrativeUnitRoleMember#member_object_id}

---

##### `role_object_id`<sup>Required</sup> <a name="role_object_id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.roleObjectId"></a>

```python
role_object_id: str
```

- *Type:* str

The object ID of the directory role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#role_object_id AdministrativeUnitRoleMember#role_object_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#id AdministrativeUnitRoleMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.timeouts"></a>

```python
timeouts: AdministrativeUnitRoleMemberTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#timeouts AdministrativeUnitRoleMember#timeouts}

---

### AdministrativeUnitRoleMemberTimeouts <a name="AdministrativeUnitRoleMemberTimeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import administrative_unit_role_member

administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#create AdministrativeUnitRoleMember#create}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#delete AdministrativeUnitRoleMember#delete}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#read AdministrativeUnitRoleMember#read}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#update AdministrativeUnitRoleMember#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#create AdministrativeUnitRoleMember#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#delete AdministrativeUnitRoleMember#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#read AdministrativeUnitRoleMember#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/administrative_unit_role_member#update AdministrativeUnitRoleMember#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AdministrativeUnitRoleMemberTimeoutsOutputReference <a name="AdministrativeUnitRoleMemberTimeoutsOutputReference" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import administrative_unit_role_member

administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AdministrativeUnitRoleMemberTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a>, cdktf.IResolvable]

---


