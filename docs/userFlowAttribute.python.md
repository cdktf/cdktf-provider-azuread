# `userFlowAttribute` Submodule <a name="`userFlowAttribute` Submodule" id="@cdktf/provider-azuread.userFlowAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserFlowAttribute <a name="UserFlowAttribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute azuread_user_flow_attribute}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import user_flow_attribute

userFlowAttribute.UserFlowAttribute(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_type: str,
  description: str,
  display_name: str,
  id: str = None,
  timeouts: UserFlowAttributeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.dataType">data_type</a></code> | <code>str</code> | The data type of the user flow attribute. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the user flow attribute that is shown to the user at the time of sign-up. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the user flow attribute. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#id UserFlowAttribute#id}. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts">UserFlowAttributeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.dataType"></a>

- *Type:* str

The data type of the user flow attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#data_type UserFlowAttribute#data_type}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.description"></a>

- *Type:* str

The description of the user flow attribute that is shown to the user at the time of sign-up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#description UserFlowAttribute#description}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the user flow attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#display_name UserFlowAttribute#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#id UserFlowAttribute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts">UserFlowAttributeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#timeouts UserFlowAttribute#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#create UserFlowAttribute#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#delete UserFlowAttribute#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#read UserFlowAttribute#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#update UserFlowAttribute#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a UserFlowAttribute resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import user_flow_attribute

userFlowAttribute.UserFlowAttribute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import user_flow_attribute

userFlowAttribute.UserFlowAttribute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import user_flow_attribute

userFlowAttribute.UserFlowAttribute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import user_flow_attribute

userFlowAttribute.UserFlowAttribute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a UserFlowAttribute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the UserFlowAttribute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing UserFlowAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UserFlowAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.attributeType">attribute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference">UserFlowAttributeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts">UserFlowAttributeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `attribute_type`<sup>Required</sup> <a name="attribute_type" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.attributeType"></a>

```python
attribute_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.timeouts"></a>

```python
timeouts: UserFlowAttributeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference">UserFlowAttributeTimeoutsOutputReference</a>

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | UserFlowAttributeTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts">UserFlowAttributeTimeouts</a>

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttribute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserFlowAttributeConfig <a name="UserFlowAttributeConfig" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import user_flow_attribute

userFlowAttribute.UserFlowAttributeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_type: str,
  description: str,
  display_name: str,
  id: str = None,
  timeouts: UserFlowAttributeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.dataType">data_type</a></code> | <code>str</code> | The data type of the user flow attribute. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.description">description</a></code> | <code>str</code> | The description of the user flow attribute that is shown to the user at the time of sign-up. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the user flow attribute. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#id UserFlowAttribute#id}. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts">UserFlowAttributeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

The data type of the user flow attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#data_type UserFlowAttribute#data_type}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the user flow attribute that is shown to the user at the time of sign-up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#description UserFlowAttribute#description}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the user flow attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#display_name UserFlowAttribute#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#id UserFlowAttribute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeConfig.property.timeouts"></a>

```python
timeouts: UserFlowAttributeTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts">UserFlowAttributeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#timeouts UserFlowAttribute#timeouts}

---

### UserFlowAttributeTimeouts <a name="UserFlowAttributeTimeouts" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import user_flow_attribute

userFlowAttribute.UserFlowAttributeTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#create UserFlowAttribute#create}. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#delete UserFlowAttribute#delete}. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#read UserFlowAttribute#read}. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#update UserFlowAttribute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#create UserFlowAttribute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#delete UserFlowAttribute#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#read UserFlowAttribute#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/user_flow_attribute#update UserFlowAttribute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### UserFlowAttributeTimeoutsOutputReference <a name="UserFlowAttributeTimeoutsOutputReference" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import user_flow_attribute

userFlowAttribute.UserFlowAttributeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts">UserFlowAttributeTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | UserFlowAttributeTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.userFlowAttribute.UserFlowAttributeTimeouts">UserFlowAttributeTimeouts</a>

---



