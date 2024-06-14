# `authenticationStrengthPolicy` Submodule <a name="`authenticationStrengthPolicy` Submodule" id="@cdktf/provider-azuread.authenticationStrengthPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticationStrengthPolicy <a name="AuthenticationStrengthPolicy" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy azuread_authentication_strength_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import authentication_strength_policy

authenticationStrengthPolicy.AuthenticationStrengthPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allowed_combinations: typing.List[str],
  display_name: str,
  description: str = None,
  id: str = None,
  timeouts: AuthenticationStrengthPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.allowedCombinations">allowed_combinations</a></code> | <code>typing.List[str]</code> | The allowed MFA methods for this policy. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the authentication strength policy. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | The description for the authentication strength policy. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#id AuthenticationStrengthPolicy#id}. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts">AuthenticationStrengthPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_combinations`<sup>Required</sup> <a name="allowed_combinations" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.allowedCombinations"></a>

- *Type:* typing.List[str]

The allowed MFA methods for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#allowed_combinations AuthenticationStrengthPolicy#allowed_combinations}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the authentication strength policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#display_name AuthenticationStrengthPolicy#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.description"></a>

- *Type:* str

The description for the authentication strength policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#description AuthenticationStrengthPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#id AuthenticationStrengthPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts">AuthenticationStrengthPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#timeouts AuthenticationStrengthPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#create AuthenticationStrengthPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#delete AuthenticationStrengthPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#read AuthenticationStrengthPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#update AuthenticationStrengthPolicy#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AuthenticationStrengthPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import authentication_strength_policy

authenticationStrengthPolicy.AuthenticationStrengthPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import authentication_strength_policy

authenticationStrengthPolicy.AuthenticationStrengthPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import authentication_strength_policy

authenticationStrengthPolicy.AuthenticationStrengthPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import authentication_strength_policy

authenticationStrengthPolicy.AuthenticationStrengthPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AuthenticationStrengthPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AuthenticationStrengthPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AuthenticationStrengthPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuthenticationStrengthPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference">AuthenticationStrengthPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.allowedCombinationsInput">allowed_combinations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts">AuthenticationStrengthPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.allowedCombinations">allowed_combinations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.timeouts"></a>

```python
timeouts: AuthenticationStrengthPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference">AuthenticationStrengthPolicyTimeoutsOutputReference</a>

---

##### `allowed_combinations_input`<sup>Optional</sup> <a name="allowed_combinations_input" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.allowedCombinationsInput"></a>

```python
allowed_combinations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AuthenticationStrengthPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts">AuthenticationStrengthPolicyTimeouts</a>]

---

##### `allowed_combinations`<sup>Required</sup> <a name="allowed_combinations" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.allowedCombinations"></a>

```python
allowed_combinations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticationStrengthPolicyConfig <a name="AuthenticationStrengthPolicyConfig" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import authentication_strength_policy

authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allowed_combinations: typing.List[str],
  display_name: str,
  description: str = None,
  id: str = None,
  timeouts: AuthenticationStrengthPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.allowedCombinations">allowed_combinations</a></code> | <code>typing.List[str]</code> | The allowed MFA methods for this policy. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the authentication strength policy. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.description">description</a></code> | <code>str</code> | The description for the authentication strength policy. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#id AuthenticationStrengthPolicy#id}. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts">AuthenticationStrengthPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_combinations`<sup>Required</sup> <a name="allowed_combinations" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.allowedCombinations"></a>

```python
allowed_combinations: typing.List[str]
```

- *Type:* typing.List[str]

The allowed MFA methods for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#allowed_combinations AuthenticationStrengthPolicy#allowed_combinations}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the authentication strength policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#display_name AuthenticationStrengthPolicy#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description for the authentication strength policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#description AuthenticationStrengthPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#id AuthenticationStrengthPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyConfig.property.timeouts"></a>

```python
timeouts: AuthenticationStrengthPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts">AuthenticationStrengthPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#timeouts AuthenticationStrengthPolicy#timeouts}

---

### AuthenticationStrengthPolicyTimeouts <a name="AuthenticationStrengthPolicyTimeouts" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import authentication_strength_policy

authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#create AuthenticationStrengthPolicy#create}. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#delete AuthenticationStrengthPolicy#delete}. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#read AuthenticationStrengthPolicy#read}. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#update AuthenticationStrengthPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#create AuthenticationStrengthPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#delete AuthenticationStrengthPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#read AuthenticationStrengthPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/authentication_strength_policy#update AuthenticationStrengthPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AuthenticationStrengthPolicyTimeoutsOutputReference <a name="AuthenticationStrengthPolicyTimeoutsOutputReference" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import authentication_strength_policy

authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts">AuthenticationStrengthPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AuthenticationStrengthPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.authenticationStrengthPolicy.AuthenticationStrengthPolicyTimeouts">AuthenticationStrengthPolicyTimeouts</a>]

---



