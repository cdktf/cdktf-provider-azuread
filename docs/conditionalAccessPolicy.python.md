# `conditionalAccessPolicy` Submodule <a name="`conditionalAccessPolicy` Submodule" id="@cdktf/provider-azuread.conditionalAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConditionalAccessPolicy <a name="ConditionalAccessPolicy" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy azuread_conditional_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  conditions: ConditionalAccessPolicyConditions,
  display_name: str,
  grant_controls: ConditionalAccessPolicyGrantControls,
  state: str,
  id: str = None,
  session_controls: ConditionalAccessPolicySessionControls = None,
  timeouts: ConditionalAccessPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions">ConditionalAccessPolicyConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#display_name ConditionalAccessPolicy#display_name}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.grantControls">grant_controls</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls">ConditionalAccessPolicyGrantControls</a></code> | grant_controls block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#state ConditionalAccessPolicy#state}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#id ConditionalAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.sessionControls">session_controls</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls">ConditionalAccessPolicySessionControls</a></code> | session_controls block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts">ConditionalAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.conditions"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions">ConditionalAccessPolicyConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#conditions ConditionalAccessPolicy#conditions}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#display_name ConditionalAccessPolicy#display_name}.

---

##### `grant_controls`<sup>Required</sup> <a name="grant_controls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.grantControls"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls">ConditionalAccessPolicyGrantControls</a>

grant_controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#grant_controls ConditionalAccessPolicy#grant_controls}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#state ConditionalAccessPolicy#state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#id ConditionalAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `session_controls`<sup>Optional</sup> <a name="session_controls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.sessionControls"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls">ConditionalAccessPolicySessionControls</a>

session_controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#session_controls ConditionalAccessPolicy#session_controls}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts">ConditionalAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#timeouts ConditionalAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putGrantControls">put_grant_controls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putSessionControls">put_session_controls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetSessionControls">reset_session_controls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_conditions` <a name="put_conditions" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putConditions"></a>

```python
def put_conditions(
  applications: ConditionalAccessPolicyConditionsApplications,
  client_app_types: typing.List[str],
  users: ConditionalAccessPolicyConditionsUsers,
  devices: ConditionalAccessPolicyConditionsDevices = None,
  locations: ConditionalAccessPolicyConditionsLocations = None,
  platforms: ConditionalAccessPolicyConditionsPlatforms = None,
  sign_in_risk_levels: typing.List[str] = None,
  user_risk_levels: typing.List[str] = None
) -> None
```

###### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putConditions.parameter.applications"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications">ConditionalAccessPolicyConditionsApplications</a>

applications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#applications ConditionalAccessPolicy#applications}

---

###### `client_app_types`<sup>Required</sup> <a name="client_app_types" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putConditions.parameter.clientAppTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#client_app_types ConditionalAccessPolicy#client_app_types}.

---

###### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putConditions.parameter.users"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers">ConditionalAccessPolicyConditionsUsers</a>

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#users ConditionalAccessPolicy#users}

---

###### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putConditions.parameter.devices"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices">ConditionalAccessPolicyConditionsDevices</a>

devices block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#devices ConditionalAccessPolicy#devices}

---

###### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putConditions.parameter.locations"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations">ConditionalAccessPolicyConditionsLocations</a>

locations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#locations ConditionalAccessPolicy#locations}

---

###### `platforms`<sup>Optional</sup> <a name="platforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putConditions.parameter.platforms"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms">ConditionalAccessPolicyConditionsPlatforms</a>

platforms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#platforms ConditionalAccessPolicy#platforms}

---

###### `sign_in_risk_levels`<sup>Optional</sup> <a name="sign_in_risk_levels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putConditions.parameter.signInRiskLevels"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#sign_in_risk_levels ConditionalAccessPolicy#sign_in_risk_levels}.

---

###### `user_risk_levels`<sup>Optional</sup> <a name="user_risk_levels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putConditions.parameter.userRiskLevels"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#user_risk_levels ConditionalAccessPolicy#user_risk_levels}.

---

##### `put_grant_controls` <a name="put_grant_controls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putGrantControls"></a>

```python
def put_grant_controls(
  built_in_controls: typing.List[str],
  operator: str,
  custom_authentication_factors: typing.List[str] = None,
  terms_of_use: typing.List[str] = None
) -> None
```

###### `built_in_controls`<sup>Required</sup> <a name="built_in_controls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putGrantControls.parameter.builtInControls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#built_in_controls ConditionalAccessPolicy#built_in_controls}.

---

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putGrantControls.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#operator ConditionalAccessPolicy#operator}.

---

###### `custom_authentication_factors`<sup>Optional</sup> <a name="custom_authentication_factors" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putGrantControls.parameter.customAuthenticationFactors"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#custom_authentication_factors ConditionalAccessPolicy#custom_authentication_factors}.

---

###### `terms_of_use`<sup>Optional</sup> <a name="terms_of_use" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putGrantControls.parameter.termsOfUse"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#terms_of_use ConditionalAccessPolicy#terms_of_use}.

---

##### `put_session_controls` <a name="put_session_controls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putSessionControls"></a>

```python
def put_session_controls(
  application_enforced_restrictions_enabled: typing.Union[bool, IResolvable] = None,
  cloud_app_security_policy: str = None,
  persistent_browser_mode: str = None,
  sign_in_frequency: typing.Union[int, float] = None,
  sign_in_frequency_period: str = None
) -> None
```

###### `application_enforced_restrictions_enabled`<sup>Optional</sup> <a name="application_enforced_restrictions_enabled" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putSessionControls.parameter.applicationEnforcedRestrictionsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#application_enforced_restrictions_enabled ConditionalAccessPolicy#application_enforced_restrictions_enabled}.

---

###### `cloud_app_security_policy`<sup>Optional</sup> <a name="cloud_app_security_policy" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putSessionControls.parameter.cloudAppSecurityPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#cloud_app_security_policy ConditionalAccessPolicy#cloud_app_security_policy}.

---

###### `persistent_browser_mode`<sup>Optional</sup> <a name="persistent_browser_mode" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putSessionControls.parameter.persistentBrowserMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#persistent_browser_mode ConditionalAccessPolicy#persistent_browser_mode}.

---

###### `sign_in_frequency`<sup>Optional</sup> <a name="sign_in_frequency" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putSessionControls.parameter.signInFrequency"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#sign_in_frequency ConditionalAccessPolicy#sign_in_frequency}.

---

###### `sign_in_frequency_period`<sup>Optional</sup> <a name="sign_in_frequency_period" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putSessionControls.parameter.signInFrequencyPeriod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#sign_in_frequency_period ConditionalAccessPolicy#sign_in_frequency_period}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#create ConditionalAccessPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#delete ConditionalAccessPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#read ConditionalAccessPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#update ConditionalAccessPolicy#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_session_controls` <a name="reset_session_controls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetSessionControls"></a>

```python
def reset_session_controls() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference">ConditionalAccessPolicyConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.grantControls">grant_controls</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference">ConditionalAccessPolicyGrantControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.sessionControls">session_controls</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference">ConditionalAccessPolicySessionControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference">ConditionalAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.conditionsInput">conditions_input</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions">ConditionalAccessPolicyConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.grantControlsInput">grant_controls_input</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls">ConditionalAccessPolicyGrantControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.sessionControlsInput">session_controls_input</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls">ConditionalAccessPolicySessionControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts">ConditionalAccessPolicyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.conditions"></a>

```python
conditions: ConditionalAccessPolicyConditionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference">ConditionalAccessPolicyConditionsOutputReference</a>

---

##### `grant_controls`<sup>Required</sup> <a name="grant_controls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.grantControls"></a>

```python
grant_controls: ConditionalAccessPolicyGrantControlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference">ConditionalAccessPolicyGrantControlsOutputReference</a>

---

##### `session_controls`<sup>Required</sup> <a name="session_controls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.sessionControls"></a>

```python
session_controls: ConditionalAccessPolicySessionControlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference">ConditionalAccessPolicySessionControlsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.timeouts"></a>

```python
timeouts: ConditionalAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference">ConditionalAccessPolicyTimeoutsOutputReference</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.conditionsInput"></a>

```python
conditions_input: ConditionalAccessPolicyConditions
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions">ConditionalAccessPolicyConditions</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `grant_controls_input`<sup>Optional</sup> <a name="grant_controls_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.grantControlsInput"></a>

```python
grant_controls_input: ConditionalAccessPolicyGrantControls
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls">ConditionalAccessPolicyGrantControls</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `session_controls_input`<sup>Optional</sup> <a name="session_controls_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.sessionControlsInput"></a>

```python
session_controls_input: ConditionalAccessPolicySessionControls
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls">ConditionalAccessPolicySessionControls</a>

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ConditionalAccessPolicyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts">ConditionalAccessPolicyTimeouts</a>, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConditionalAccessPolicyConditions <a name="ConditionalAccessPolicyConditions" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyConditions(
  applications: ConditionalAccessPolicyConditionsApplications,
  client_app_types: typing.List[str],
  users: ConditionalAccessPolicyConditionsUsers,
  devices: ConditionalAccessPolicyConditionsDevices = None,
  locations: ConditionalAccessPolicyConditionsLocations = None,
  platforms: ConditionalAccessPolicyConditionsPlatforms = None,
  sign_in_risk_levels: typing.List[str] = None,
  user_risk_levels: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.applications">applications</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications">ConditionalAccessPolicyConditionsApplications</a></code> | applications block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.clientAppTypes">client_app_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#client_app_types ConditionalAccessPolicy#client_app_types}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.users">users</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers">ConditionalAccessPolicyConditionsUsers</a></code> | users block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.devices">devices</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices">ConditionalAccessPolicyConditionsDevices</a></code> | devices block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations">ConditionalAccessPolicyConditionsLocations</a></code> | locations block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.platforms">platforms</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms">ConditionalAccessPolicyConditionsPlatforms</a></code> | platforms block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.signInRiskLevels">sign_in_risk_levels</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#sign_in_risk_levels ConditionalAccessPolicy#sign_in_risk_levels}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.userRiskLevels">user_risk_levels</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#user_risk_levels ConditionalAccessPolicy#user_risk_levels}. |

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.applications"></a>

```python
applications: ConditionalAccessPolicyConditionsApplications
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications">ConditionalAccessPolicyConditionsApplications</a>

applications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#applications ConditionalAccessPolicy#applications}

---

##### `client_app_types`<sup>Required</sup> <a name="client_app_types" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.clientAppTypes"></a>

```python
client_app_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#client_app_types ConditionalAccessPolicy#client_app_types}.

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.users"></a>

```python
users: ConditionalAccessPolicyConditionsUsers
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers">ConditionalAccessPolicyConditionsUsers</a>

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#users ConditionalAccessPolicy#users}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.devices"></a>

```python
devices: ConditionalAccessPolicyConditionsDevices
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices">ConditionalAccessPolicyConditionsDevices</a>

devices block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#devices ConditionalAccessPolicy#devices}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.locations"></a>

```python
locations: ConditionalAccessPolicyConditionsLocations
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations">ConditionalAccessPolicyConditionsLocations</a>

locations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#locations ConditionalAccessPolicy#locations}

---

##### `platforms`<sup>Optional</sup> <a name="platforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.platforms"></a>

```python
platforms: ConditionalAccessPolicyConditionsPlatforms
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms">ConditionalAccessPolicyConditionsPlatforms</a>

platforms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#platforms ConditionalAccessPolicy#platforms}

---

##### `sign_in_risk_levels`<sup>Optional</sup> <a name="sign_in_risk_levels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.signInRiskLevels"></a>

```python
sign_in_risk_levels: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#sign_in_risk_levels ConditionalAccessPolicy#sign_in_risk_levels}.

---

##### `user_risk_levels`<sup>Optional</sup> <a name="user_risk_levels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.userRiskLevels"></a>

```python
user_risk_levels: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#user_risk_levels ConditionalAccessPolicy#user_risk_levels}.

---

### ConditionalAccessPolicyConditionsApplications <a name="ConditionalAccessPolicyConditionsApplications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications(
  excluded_applications: typing.List[str] = None,
  included_applications: typing.List[str] = None,
  included_user_actions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications.property.excludedApplications">excluded_applications</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_applications ConditionalAccessPolicy#excluded_applications}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications.property.includedApplications">included_applications</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_applications ConditionalAccessPolicy#included_applications}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications.property.includedUserActions">included_user_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_user_actions ConditionalAccessPolicy#included_user_actions}. |

---

##### `excluded_applications`<sup>Optional</sup> <a name="excluded_applications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications.property.excludedApplications"></a>

```python
excluded_applications: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_applications ConditionalAccessPolicy#excluded_applications}.

---

##### `included_applications`<sup>Optional</sup> <a name="included_applications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications.property.includedApplications"></a>

```python
included_applications: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_applications ConditionalAccessPolicy#included_applications}.

---

##### `included_user_actions`<sup>Optional</sup> <a name="included_user_actions" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications.property.includedUserActions"></a>

```python
included_user_actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_user_actions ConditionalAccessPolicy#included_user_actions}.

---

### ConditionalAccessPolicyConditionsDevices <a name="ConditionalAccessPolicyConditionsDevices" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices(
  filter: ConditionalAccessPolicyConditionsDevicesFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter">ConditionalAccessPolicyConditionsDevicesFilter</a></code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices.property.filter"></a>

```python
filter: ConditionalAccessPolicyConditionsDevicesFilter
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter">ConditionalAccessPolicyConditionsDevicesFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#filter ConditionalAccessPolicy#filter}

---

### ConditionalAccessPolicyConditionsDevicesFilter <a name="ConditionalAccessPolicyConditionsDevicesFilter" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter(
  mode: str,
  rule: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#mode ConditionalAccessPolicy#mode}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter.property.rule">rule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#rule ConditionalAccessPolicy#rule}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#mode ConditionalAccessPolicy#mode}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter.property.rule"></a>

```python
rule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#rule ConditionalAccessPolicy#rule}.

---

### ConditionalAccessPolicyConditionsLocations <a name="ConditionalAccessPolicyConditionsLocations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations(
  included_locations: typing.List[str],
  excluded_locations: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations.property.includedLocations">included_locations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_locations ConditionalAccessPolicy#included_locations}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations.property.excludedLocations">excluded_locations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_locations ConditionalAccessPolicy#excluded_locations}. |

---

##### `included_locations`<sup>Required</sup> <a name="included_locations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations.property.includedLocations"></a>

```python
included_locations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_locations ConditionalAccessPolicy#included_locations}.

---

##### `excluded_locations`<sup>Optional</sup> <a name="excluded_locations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations.property.excludedLocations"></a>

```python
excluded_locations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_locations ConditionalAccessPolicy#excluded_locations}.

---

### ConditionalAccessPolicyConditionsPlatforms <a name="ConditionalAccessPolicyConditionsPlatforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms(
  included_platforms: typing.List[str],
  excluded_platforms: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms.property.includedPlatforms">included_platforms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_platforms ConditionalAccessPolicy#included_platforms}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms.property.excludedPlatforms">excluded_platforms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_platforms ConditionalAccessPolicy#excluded_platforms}. |

---

##### `included_platforms`<sup>Required</sup> <a name="included_platforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms.property.includedPlatforms"></a>

```python
included_platforms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_platforms ConditionalAccessPolicy#included_platforms}.

---

##### `excluded_platforms`<sup>Optional</sup> <a name="excluded_platforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms.property.excludedPlatforms"></a>

```python
excluded_platforms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_platforms ConditionalAccessPolicy#excluded_platforms}.

---

### ConditionalAccessPolicyConditionsUsers <a name="ConditionalAccessPolicyConditionsUsers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers(
  excluded_groups: typing.List[str] = None,
  excluded_roles: typing.List[str] = None,
  excluded_users: typing.List[str] = None,
  included_groups: typing.List[str] = None,
  included_roles: typing.List[str] = None,
  included_users: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.excludedGroups">excluded_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_groups ConditionalAccessPolicy#excluded_groups}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.excludedRoles">excluded_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_roles ConditionalAccessPolicy#excluded_roles}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.excludedUsers">excluded_users</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_users ConditionalAccessPolicy#excluded_users}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.includedGroups">included_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_groups ConditionalAccessPolicy#included_groups}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.includedRoles">included_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_roles ConditionalAccessPolicy#included_roles}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.includedUsers">included_users</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_users ConditionalAccessPolicy#included_users}. |

---

##### `excluded_groups`<sup>Optional</sup> <a name="excluded_groups" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.excludedGroups"></a>

```python
excluded_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_groups ConditionalAccessPolicy#excluded_groups}.

---

##### `excluded_roles`<sup>Optional</sup> <a name="excluded_roles" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.excludedRoles"></a>

```python
excluded_roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_roles ConditionalAccessPolicy#excluded_roles}.

---

##### `excluded_users`<sup>Optional</sup> <a name="excluded_users" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.excludedUsers"></a>

```python
excluded_users: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_users ConditionalAccessPolicy#excluded_users}.

---

##### `included_groups`<sup>Optional</sup> <a name="included_groups" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.includedGroups"></a>

```python
included_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_groups ConditionalAccessPolicy#included_groups}.

---

##### `included_roles`<sup>Optional</sup> <a name="included_roles" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.includedRoles"></a>

```python
included_roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_roles ConditionalAccessPolicy#included_roles}.

---

##### `included_users`<sup>Optional</sup> <a name="included_users" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.includedUsers"></a>

```python
included_users: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_users ConditionalAccessPolicy#included_users}.

---

### ConditionalAccessPolicyConfig <a name="ConditionalAccessPolicyConfig" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  conditions: ConditionalAccessPolicyConditions,
  display_name: str,
  grant_controls: ConditionalAccessPolicyGrantControls,
  state: str,
  id: str = None,
  session_controls: ConditionalAccessPolicySessionControls = None,
  timeouts: ConditionalAccessPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions">ConditionalAccessPolicyConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#display_name ConditionalAccessPolicy#display_name}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.grantControls">grant_controls</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls">ConditionalAccessPolicyGrantControls</a></code> | grant_controls block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#state ConditionalAccessPolicy#state}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#id ConditionalAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.sessionControls">session_controls</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls">ConditionalAccessPolicySessionControls</a></code> | session_controls block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts">ConditionalAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.conditions"></a>

```python
conditions: ConditionalAccessPolicyConditions
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions">ConditionalAccessPolicyConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#conditions ConditionalAccessPolicy#conditions}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#display_name ConditionalAccessPolicy#display_name}.

---

##### `grant_controls`<sup>Required</sup> <a name="grant_controls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.grantControls"></a>

```python
grant_controls: ConditionalAccessPolicyGrantControls
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls">ConditionalAccessPolicyGrantControls</a>

grant_controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#grant_controls ConditionalAccessPolicy#grant_controls}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#state ConditionalAccessPolicy#state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#id ConditionalAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `session_controls`<sup>Optional</sup> <a name="session_controls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.sessionControls"></a>

```python
session_controls: ConditionalAccessPolicySessionControls
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls">ConditionalAccessPolicySessionControls</a>

session_controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#session_controls ConditionalAccessPolicy#session_controls}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.timeouts"></a>

```python
timeouts: ConditionalAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts">ConditionalAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#timeouts ConditionalAccessPolicy#timeouts}

---

### ConditionalAccessPolicyGrantControls <a name="ConditionalAccessPolicyGrantControls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyGrantControls(
  built_in_controls: typing.List[str],
  operator: str,
  custom_authentication_factors: typing.List[str] = None,
  terms_of_use: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.builtInControls">built_in_controls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#built_in_controls ConditionalAccessPolicy#built_in_controls}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#operator ConditionalAccessPolicy#operator}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.customAuthenticationFactors">custom_authentication_factors</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#custom_authentication_factors ConditionalAccessPolicy#custom_authentication_factors}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.termsOfUse">terms_of_use</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#terms_of_use ConditionalAccessPolicy#terms_of_use}. |

---

##### `built_in_controls`<sup>Required</sup> <a name="built_in_controls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.builtInControls"></a>

```python
built_in_controls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#built_in_controls ConditionalAccessPolicy#built_in_controls}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#operator ConditionalAccessPolicy#operator}.

---

##### `custom_authentication_factors`<sup>Optional</sup> <a name="custom_authentication_factors" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.customAuthenticationFactors"></a>

```python
custom_authentication_factors: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#custom_authentication_factors ConditionalAccessPolicy#custom_authentication_factors}.

---

##### `terms_of_use`<sup>Optional</sup> <a name="terms_of_use" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.termsOfUse"></a>

```python
terms_of_use: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#terms_of_use ConditionalAccessPolicy#terms_of_use}.

---

### ConditionalAccessPolicySessionControls <a name="ConditionalAccessPolicySessionControls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicySessionControls(
  application_enforced_restrictions_enabled: typing.Union[bool, IResolvable] = None,
  cloud_app_security_policy: str = None,
  persistent_browser_mode: str = None,
  sign_in_frequency: typing.Union[int, float] = None,
  sign_in_frequency_period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.applicationEnforcedRestrictionsEnabled">application_enforced_restrictions_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#application_enforced_restrictions_enabled ConditionalAccessPolicy#application_enforced_restrictions_enabled}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.cloudAppSecurityPolicy">cloud_app_security_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#cloud_app_security_policy ConditionalAccessPolicy#cloud_app_security_policy}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.persistentBrowserMode">persistent_browser_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#persistent_browser_mode ConditionalAccessPolicy#persistent_browser_mode}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.signInFrequency">sign_in_frequency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#sign_in_frequency ConditionalAccessPolicy#sign_in_frequency}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.signInFrequencyPeriod">sign_in_frequency_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#sign_in_frequency_period ConditionalAccessPolicy#sign_in_frequency_period}. |

---

##### `application_enforced_restrictions_enabled`<sup>Optional</sup> <a name="application_enforced_restrictions_enabled" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.applicationEnforcedRestrictionsEnabled"></a>

```python
application_enforced_restrictions_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#application_enforced_restrictions_enabled ConditionalAccessPolicy#application_enforced_restrictions_enabled}.

---

##### `cloud_app_security_policy`<sup>Optional</sup> <a name="cloud_app_security_policy" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.cloudAppSecurityPolicy"></a>

```python
cloud_app_security_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#cloud_app_security_policy ConditionalAccessPolicy#cloud_app_security_policy}.

---

##### `persistent_browser_mode`<sup>Optional</sup> <a name="persistent_browser_mode" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.persistentBrowserMode"></a>

```python
persistent_browser_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#persistent_browser_mode ConditionalAccessPolicy#persistent_browser_mode}.

---

##### `sign_in_frequency`<sup>Optional</sup> <a name="sign_in_frequency" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.signInFrequency"></a>

```python
sign_in_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#sign_in_frequency ConditionalAccessPolicy#sign_in_frequency}.

---

##### `sign_in_frequency_period`<sup>Optional</sup> <a name="sign_in_frequency_period" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.signInFrequencyPeriod"></a>

```python
sign_in_frequency_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#sign_in_frequency_period ConditionalAccessPolicy#sign_in_frequency_period}.

---

### ConditionalAccessPolicyTimeouts <a name="ConditionalAccessPolicyTimeouts" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#create ConditionalAccessPolicy#create}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#delete ConditionalAccessPolicy#delete}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#read ConditionalAccessPolicy#read}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#update ConditionalAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#create ConditionalAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#delete ConditionalAccessPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#read ConditionalAccessPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#update ConditionalAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConditionalAccessPolicyConditionsApplicationsOutputReference <a name="ConditionalAccessPolicyConditionsApplicationsOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resetExcludedApplications">reset_excluded_applications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resetIncludedApplications">reset_included_applications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resetIncludedUserActions">reset_included_user_actions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_applications` <a name="reset_excluded_applications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resetExcludedApplications"></a>

```python
def reset_excluded_applications() -> None
```

##### `reset_included_applications` <a name="reset_included_applications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resetIncludedApplications"></a>

```python
def reset_included_applications() -> None
```

##### `reset_included_user_actions` <a name="reset_included_user_actions" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resetIncludedUserActions"></a>

```python
def reset_included_user_actions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.excludedApplicationsInput">excluded_applications_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.includedApplicationsInput">included_applications_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.includedUserActionsInput">included_user_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.excludedApplications">excluded_applications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.includedApplications">included_applications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.includedUserActions">included_user_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications">ConditionalAccessPolicyConditionsApplications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_applications_input`<sup>Optional</sup> <a name="excluded_applications_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.excludedApplicationsInput"></a>

```python
excluded_applications_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_applications_input`<sup>Optional</sup> <a name="included_applications_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.includedApplicationsInput"></a>

```python
included_applications_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_user_actions_input`<sup>Optional</sup> <a name="included_user_actions_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.includedUserActionsInput"></a>

```python
included_user_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_applications`<sup>Required</sup> <a name="excluded_applications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.excludedApplications"></a>

```python
excluded_applications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_applications`<sup>Required</sup> <a name="included_applications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.includedApplications"></a>

```python
included_applications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_user_actions`<sup>Required</sup> <a name="included_user_actions" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.includedUserActions"></a>

```python
included_user_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.internalValue"></a>

```python
internal_value: ConditionalAccessPolicyConditionsApplications
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications">ConditionalAccessPolicyConditionsApplications</a>

---


### ConditionalAccessPolicyConditionsDevicesFilterOutputReference <a name="ConditionalAccessPolicyConditionsDevicesFilterOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter">ConditionalAccessPolicyConditionsDevicesFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.internalValue"></a>

```python
internal_value: ConditionalAccessPolicyConditionsDevicesFilter
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter">ConditionalAccessPolicyConditionsDevicesFilter</a>

---


### ConditionalAccessPolicyConditionsDevicesOutputReference <a name="ConditionalAccessPolicyConditionsDevicesOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.putFilter"></a>

```python
def put_filter(
  mode: str,
  rule: str
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.putFilter.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#mode ConditionalAccessPolicy#mode}.

---

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.putFilter.parameter.rule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#rule ConditionalAccessPolicy#rule}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference">ConditionalAccessPolicyConditionsDevicesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter">ConditionalAccessPolicyConditionsDevicesFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices">ConditionalAccessPolicyConditionsDevices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.filter"></a>

```python
filter: ConditionalAccessPolicyConditionsDevicesFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference">ConditionalAccessPolicyConditionsDevicesFilterOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.filterInput"></a>

```python
filter_input: ConditionalAccessPolicyConditionsDevicesFilter
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter">ConditionalAccessPolicyConditionsDevicesFilter</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.internalValue"></a>

```python
internal_value: ConditionalAccessPolicyConditionsDevices
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices">ConditionalAccessPolicyConditionsDevices</a>

---


### ConditionalAccessPolicyConditionsLocationsOutputReference <a name="ConditionalAccessPolicyConditionsLocationsOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.resetExcludedLocations">reset_excluded_locations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_locations` <a name="reset_excluded_locations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.resetExcludedLocations"></a>

```python
def reset_excluded_locations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.excludedLocationsInput">excluded_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.includedLocationsInput">included_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.excludedLocations">excluded_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.includedLocations">included_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations">ConditionalAccessPolicyConditionsLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_locations_input`<sup>Optional</sup> <a name="excluded_locations_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.excludedLocationsInput"></a>

```python
excluded_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_locations_input`<sup>Optional</sup> <a name="included_locations_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.includedLocationsInput"></a>

```python
included_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_locations`<sup>Required</sup> <a name="excluded_locations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.excludedLocations"></a>

```python
excluded_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_locations`<sup>Required</sup> <a name="included_locations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.includedLocations"></a>

```python
included_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.internalValue"></a>

```python
internal_value: ConditionalAccessPolicyConditionsLocations
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations">ConditionalAccessPolicyConditionsLocations</a>

---


### ConditionalAccessPolicyConditionsOutputReference <a name="ConditionalAccessPolicyConditionsOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putApplications">put_applications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putDevices">put_devices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putLocations">put_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putPlatforms">put_platforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putUsers">put_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetDevices">reset_devices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetLocations">reset_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetPlatforms">reset_platforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetSignInRiskLevels">reset_sign_in_risk_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetUserRiskLevels">reset_user_risk_levels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_applications` <a name="put_applications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putApplications"></a>

```python
def put_applications(
  excluded_applications: typing.List[str] = None,
  included_applications: typing.List[str] = None,
  included_user_actions: typing.List[str] = None
) -> None
```

###### `excluded_applications`<sup>Optional</sup> <a name="excluded_applications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putApplications.parameter.excludedApplications"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_applications ConditionalAccessPolicy#excluded_applications}.

---

###### `included_applications`<sup>Optional</sup> <a name="included_applications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putApplications.parameter.includedApplications"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_applications ConditionalAccessPolicy#included_applications}.

---

###### `included_user_actions`<sup>Optional</sup> <a name="included_user_actions" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putApplications.parameter.includedUserActions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_user_actions ConditionalAccessPolicy#included_user_actions}.

---

##### `put_devices` <a name="put_devices" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putDevices"></a>

```python
def put_devices(
  filter: ConditionalAccessPolicyConditionsDevicesFilter = None
) -> None
```

###### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putDevices.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter">ConditionalAccessPolicyConditionsDevicesFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#filter ConditionalAccessPolicy#filter}

---

##### `put_locations` <a name="put_locations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putLocations"></a>

```python
def put_locations(
  included_locations: typing.List[str],
  excluded_locations: typing.List[str] = None
) -> None
```

###### `included_locations`<sup>Required</sup> <a name="included_locations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putLocations.parameter.includedLocations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_locations ConditionalAccessPolicy#included_locations}.

---

###### `excluded_locations`<sup>Optional</sup> <a name="excluded_locations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putLocations.parameter.excludedLocations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_locations ConditionalAccessPolicy#excluded_locations}.

---

##### `put_platforms` <a name="put_platforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putPlatforms"></a>

```python
def put_platforms(
  included_platforms: typing.List[str],
  excluded_platforms: typing.List[str] = None
) -> None
```

###### `included_platforms`<sup>Required</sup> <a name="included_platforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putPlatforms.parameter.includedPlatforms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_platforms ConditionalAccessPolicy#included_platforms}.

---

###### `excluded_platforms`<sup>Optional</sup> <a name="excluded_platforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putPlatforms.parameter.excludedPlatforms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_platforms ConditionalAccessPolicy#excluded_platforms}.

---

##### `put_users` <a name="put_users" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putUsers"></a>

```python
def put_users(
  excluded_groups: typing.List[str] = None,
  excluded_roles: typing.List[str] = None,
  excluded_users: typing.List[str] = None,
  included_groups: typing.List[str] = None,
  included_roles: typing.List[str] = None,
  included_users: typing.List[str] = None
) -> None
```

###### `excluded_groups`<sup>Optional</sup> <a name="excluded_groups" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putUsers.parameter.excludedGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_groups ConditionalAccessPolicy#excluded_groups}.

---

###### `excluded_roles`<sup>Optional</sup> <a name="excluded_roles" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putUsers.parameter.excludedRoles"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_roles ConditionalAccessPolicy#excluded_roles}.

---

###### `excluded_users`<sup>Optional</sup> <a name="excluded_users" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putUsers.parameter.excludedUsers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#excluded_users ConditionalAccessPolicy#excluded_users}.

---

###### `included_groups`<sup>Optional</sup> <a name="included_groups" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putUsers.parameter.includedGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_groups ConditionalAccessPolicy#included_groups}.

---

###### `included_roles`<sup>Optional</sup> <a name="included_roles" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putUsers.parameter.includedRoles"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_roles ConditionalAccessPolicy#included_roles}.

---

###### `included_users`<sup>Optional</sup> <a name="included_users" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putUsers.parameter.includedUsers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy#included_users ConditionalAccessPolicy#included_users}.

---

##### `reset_devices` <a name="reset_devices" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetDevices"></a>

```python
def reset_devices() -> None
```

##### `reset_locations` <a name="reset_locations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetLocations"></a>

```python
def reset_locations() -> None
```

##### `reset_platforms` <a name="reset_platforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetPlatforms"></a>

```python
def reset_platforms() -> None
```

##### `reset_sign_in_risk_levels` <a name="reset_sign_in_risk_levels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetSignInRiskLevels"></a>

```python
def reset_sign_in_risk_levels() -> None
```

##### `reset_user_risk_levels` <a name="reset_user_risk_levels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetUserRiskLevels"></a>

```python
def reset_user_risk_levels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.applications">applications</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference">ConditionalAccessPolicyConditionsApplicationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.devices">devices</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference">ConditionalAccessPolicyConditionsDevicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference">ConditionalAccessPolicyConditionsLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.platforms">platforms</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference">ConditionalAccessPolicyConditionsPlatformsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.users">users</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference">ConditionalAccessPolicyConditionsUsersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.applicationsInput">applications_input</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications">ConditionalAccessPolicyConditionsApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.clientAppTypesInput">client_app_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.devicesInput">devices_input</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices">ConditionalAccessPolicyConditionsDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.locationsInput">locations_input</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations">ConditionalAccessPolicyConditionsLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.platformsInput">platforms_input</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms">ConditionalAccessPolicyConditionsPlatforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.signInRiskLevelsInput">sign_in_risk_levels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.userRiskLevelsInput">user_risk_levels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.usersInput">users_input</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers">ConditionalAccessPolicyConditionsUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.clientAppTypes">client_app_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.signInRiskLevels">sign_in_risk_levels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.userRiskLevels">user_risk_levels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions">ConditionalAccessPolicyConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.applications"></a>

```python
applications: ConditionalAccessPolicyConditionsApplicationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference">ConditionalAccessPolicyConditionsApplicationsOutputReference</a>

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.devices"></a>

```python
devices: ConditionalAccessPolicyConditionsDevicesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference">ConditionalAccessPolicyConditionsDevicesOutputReference</a>

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.locations"></a>

```python
locations: ConditionalAccessPolicyConditionsLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference">ConditionalAccessPolicyConditionsLocationsOutputReference</a>

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.platforms"></a>

```python
platforms: ConditionalAccessPolicyConditionsPlatformsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference">ConditionalAccessPolicyConditionsPlatformsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.users"></a>

```python
users: ConditionalAccessPolicyConditionsUsersOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference">ConditionalAccessPolicyConditionsUsersOutputReference</a>

---

##### `applications_input`<sup>Optional</sup> <a name="applications_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.applicationsInput"></a>

```python
applications_input: ConditionalAccessPolicyConditionsApplications
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications">ConditionalAccessPolicyConditionsApplications</a>

---

##### `client_app_types_input`<sup>Optional</sup> <a name="client_app_types_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.clientAppTypesInput"></a>

```python
client_app_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `devices_input`<sup>Optional</sup> <a name="devices_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.devicesInput"></a>

```python
devices_input: ConditionalAccessPolicyConditionsDevices
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices">ConditionalAccessPolicyConditionsDevices</a>

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.locationsInput"></a>

```python
locations_input: ConditionalAccessPolicyConditionsLocations
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations">ConditionalAccessPolicyConditionsLocations</a>

---

##### `platforms_input`<sup>Optional</sup> <a name="platforms_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.platformsInput"></a>

```python
platforms_input: ConditionalAccessPolicyConditionsPlatforms
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms">ConditionalAccessPolicyConditionsPlatforms</a>

---

##### `sign_in_risk_levels_input`<sup>Optional</sup> <a name="sign_in_risk_levels_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.signInRiskLevelsInput"></a>

```python
sign_in_risk_levels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_risk_levels_input`<sup>Optional</sup> <a name="user_risk_levels_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.userRiskLevelsInput"></a>

```python
user_risk_levels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.usersInput"></a>

```python
users_input: ConditionalAccessPolicyConditionsUsers
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers">ConditionalAccessPolicyConditionsUsers</a>

---

##### `client_app_types`<sup>Required</sup> <a name="client_app_types" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.clientAppTypes"></a>

```python
client_app_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sign_in_risk_levels`<sup>Required</sup> <a name="sign_in_risk_levels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.signInRiskLevels"></a>

```python
sign_in_risk_levels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_risk_levels`<sup>Required</sup> <a name="user_risk_levels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.userRiskLevels"></a>

```python
user_risk_levels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.internalValue"></a>

```python
internal_value: ConditionalAccessPolicyConditions
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions">ConditionalAccessPolicyConditions</a>

---


### ConditionalAccessPolicyConditionsPlatformsOutputReference <a name="ConditionalAccessPolicyConditionsPlatformsOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.resetExcludedPlatforms">reset_excluded_platforms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_platforms` <a name="reset_excluded_platforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.resetExcludedPlatforms"></a>

```python
def reset_excluded_platforms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.excludedPlatformsInput">excluded_platforms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.includedPlatformsInput">included_platforms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.excludedPlatforms">excluded_platforms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.includedPlatforms">included_platforms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms">ConditionalAccessPolicyConditionsPlatforms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_platforms_input`<sup>Optional</sup> <a name="excluded_platforms_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.excludedPlatformsInput"></a>

```python
excluded_platforms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_platforms_input`<sup>Optional</sup> <a name="included_platforms_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.includedPlatformsInput"></a>

```python
included_platforms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_platforms`<sup>Required</sup> <a name="excluded_platforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.excludedPlatforms"></a>

```python
excluded_platforms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_platforms`<sup>Required</sup> <a name="included_platforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.includedPlatforms"></a>

```python
included_platforms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.internalValue"></a>

```python
internal_value: ConditionalAccessPolicyConditionsPlatforms
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms">ConditionalAccessPolicyConditionsPlatforms</a>

---


### ConditionalAccessPolicyConditionsUsersOutputReference <a name="ConditionalAccessPolicyConditionsUsersOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetExcludedGroups">reset_excluded_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetExcludedRoles">reset_excluded_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetExcludedUsers">reset_excluded_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetIncludedGroups">reset_included_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetIncludedRoles">reset_included_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetIncludedUsers">reset_included_users</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_groups` <a name="reset_excluded_groups" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetExcludedGroups"></a>

```python
def reset_excluded_groups() -> None
```

##### `reset_excluded_roles` <a name="reset_excluded_roles" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetExcludedRoles"></a>

```python
def reset_excluded_roles() -> None
```

##### `reset_excluded_users` <a name="reset_excluded_users" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetExcludedUsers"></a>

```python
def reset_excluded_users() -> None
```

##### `reset_included_groups` <a name="reset_included_groups" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetIncludedGroups"></a>

```python
def reset_included_groups() -> None
```

##### `reset_included_roles` <a name="reset_included_roles" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetIncludedRoles"></a>

```python
def reset_included_roles() -> None
```

##### `reset_included_users` <a name="reset_included_users" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetIncludedUsers"></a>

```python
def reset_included_users() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedGroupsInput">excluded_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedRolesInput">excluded_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedUsersInput">excluded_users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedGroupsInput">included_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedRolesInput">included_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedUsersInput">included_users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedGroups">excluded_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedRoles">excluded_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedUsers">excluded_users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedGroups">included_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedRoles">included_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedUsers">included_users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers">ConditionalAccessPolicyConditionsUsers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_groups_input`<sup>Optional</sup> <a name="excluded_groups_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedGroupsInput"></a>

```python
excluded_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_roles_input`<sup>Optional</sup> <a name="excluded_roles_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedRolesInput"></a>

```python
excluded_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_users_input`<sup>Optional</sup> <a name="excluded_users_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedUsersInput"></a>

```python
excluded_users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_groups_input`<sup>Optional</sup> <a name="included_groups_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedGroupsInput"></a>

```python
included_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_roles_input`<sup>Optional</sup> <a name="included_roles_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedRolesInput"></a>

```python
included_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_users_input`<sup>Optional</sup> <a name="included_users_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedUsersInput"></a>

```python
included_users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_groups`<sup>Required</sup> <a name="excluded_groups" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedGroups"></a>

```python
excluded_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_roles`<sup>Required</sup> <a name="excluded_roles" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedRoles"></a>

```python
excluded_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_users`<sup>Required</sup> <a name="excluded_users" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedUsers"></a>

```python
excluded_users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_groups`<sup>Required</sup> <a name="included_groups" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedGroups"></a>

```python
included_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_roles`<sup>Required</sup> <a name="included_roles" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedRoles"></a>

```python
included_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_users`<sup>Required</sup> <a name="included_users" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedUsers"></a>

```python
included_users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.internalValue"></a>

```python
internal_value: ConditionalAccessPolicyConditionsUsers
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers">ConditionalAccessPolicyConditionsUsers</a>

---


### ConditionalAccessPolicyGrantControlsOutputReference <a name="ConditionalAccessPolicyGrantControlsOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resetCustomAuthenticationFactors">reset_custom_authentication_factors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resetTermsOfUse">reset_terms_of_use</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_authentication_factors` <a name="reset_custom_authentication_factors" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resetCustomAuthenticationFactors"></a>

```python
def reset_custom_authentication_factors() -> None
```

##### `reset_terms_of_use` <a name="reset_terms_of_use" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resetTermsOfUse"></a>

```python
def reset_terms_of_use() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.builtInControlsInput">built_in_controls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.customAuthenticationFactorsInput">custom_authentication_factors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.termsOfUseInput">terms_of_use_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.builtInControls">built_in_controls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.customAuthenticationFactors">custom_authentication_factors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.termsOfUse">terms_of_use</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls">ConditionalAccessPolicyGrantControls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `built_in_controls_input`<sup>Optional</sup> <a name="built_in_controls_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.builtInControlsInput"></a>

```python
built_in_controls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_authentication_factors_input`<sup>Optional</sup> <a name="custom_authentication_factors_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.customAuthenticationFactorsInput"></a>

```python
custom_authentication_factors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `terms_of_use_input`<sup>Optional</sup> <a name="terms_of_use_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.termsOfUseInput"></a>

```python
terms_of_use_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `built_in_controls`<sup>Required</sup> <a name="built_in_controls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.builtInControls"></a>

```python
built_in_controls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_authentication_factors`<sup>Required</sup> <a name="custom_authentication_factors" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.customAuthenticationFactors"></a>

```python
custom_authentication_factors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `terms_of_use`<sup>Required</sup> <a name="terms_of_use" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.termsOfUse"></a>

```python
terms_of_use: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.internalValue"></a>

```python
internal_value: ConditionalAccessPolicyGrantControls
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls">ConditionalAccessPolicyGrantControls</a>

---


### ConditionalAccessPolicySessionControlsOutputReference <a name="ConditionalAccessPolicySessionControlsOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetApplicationEnforcedRestrictionsEnabled">reset_application_enforced_restrictions_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetCloudAppSecurityPolicy">reset_cloud_app_security_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetPersistentBrowserMode">reset_persistent_browser_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetSignInFrequency">reset_sign_in_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetSignInFrequencyPeriod">reset_sign_in_frequency_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_enforced_restrictions_enabled` <a name="reset_application_enforced_restrictions_enabled" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetApplicationEnforcedRestrictionsEnabled"></a>

```python
def reset_application_enforced_restrictions_enabled() -> None
```

##### `reset_cloud_app_security_policy` <a name="reset_cloud_app_security_policy" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetCloudAppSecurityPolicy"></a>

```python
def reset_cloud_app_security_policy() -> None
```

##### `reset_persistent_browser_mode` <a name="reset_persistent_browser_mode" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetPersistentBrowserMode"></a>

```python
def reset_persistent_browser_mode() -> None
```

##### `reset_sign_in_frequency` <a name="reset_sign_in_frequency" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetSignInFrequency"></a>

```python
def reset_sign_in_frequency() -> None
```

##### `reset_sign_in_frequency_period` <a name="reset_sign_in_frequency_period" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetSignInFrequencyPeriod"></a>

```python
def reset_sign_in_frequency_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.applicationEnforcedRestrictionsEnabledInput">application_enforced_restrictions_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.cloudAppSecurityPolicyInput">cloud_app_security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.persistentBrowserModeInput">persistent_browser_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.signInFrequencyInput">sign_in_frequency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.signInFrequencyPeriodInput">sign_in_frequency_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.applicationEnforcedRestrictionsEnabled">application_enforced_restrictions_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.cloudAppSecurityPolicy">cloud_app_security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.persistentBrowserMode">persistent_browser_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.signInFrequency">sign_in_frequency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.signInFrequencyPeriod">sign_in_frequency_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls">ConditionalAccessPolicySessionControls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_enforced_restrictions_enabled_input`<sup>Optional</sup> <a name="application_enforced_restrictions_enabled_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.applicationEnforcedRestrictionsEnabledInput"></a>

```python
application_enforced_restrictions_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloud_app_security_policy_input`<sup>Optional</sup> <a name="cloud_app_security_policy_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.cloudAppSecurityPolicyInput"></a>

```python
cloud_app_security_policy_input: str
```

- *Type:* str

---

##### `persistent_browser_mode_input`<sup>Optional</sup> <a name="persistent_browser_mode_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.persistentBrowserModeInput"></a>

```python
persistent_browser_mode_input: str
```

- *Type:* str

---

##### `sign_in_frequency_input`<sup>Optional</sup> <a name="sign_in_frequency_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.signInFrequencyInput"></a>

```python
sign_in_frequency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sign_in_frequency_period_input`<sup>Optional</sup> <a name="sign_in_frequency_period_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.signInFrequencyPeriodInput"></a>

```python
sign_in_frequency_period_input: str
```

- *Type:* str

---

##### `application_enforced_restrictions_enabled`<sup>Required</sup> <a name="application_enforced_restrictions_enabled" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.applicationEnforcedRestrictionsEnabled"></a>

```python
application_enforced_restrictions_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloud_app_security_policy`<sup>Required</sup> <a name="cloud_app_security_policy" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.cloudAppSecurityPolicy"></a>

```python
cloud_app_security_policy: str
```

- *Type:* str

---

##### `persistent_browser_mode`<sup>Required</sup> <a name="persistent_browser_mode" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.persistentBrowserMode"></a>

```python
persistent_browser_mode: str
```

- *Type:* str

---

##### `sign_in_frequency`<sup>Required</sup> <a name="sign_in_frequency" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.signInFrequency"></a>

```python
sign_in_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sign_in_frequency_period`<sup>Required</sup> <a name="sign_in_frequency_period" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.signInFrequencyPeriod"></a>

```python
sign_in_frequency_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.internalValue"></a>

```python
internal_value: ConditionalAccessPolicySessionControls
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls">ConditionalAccessPolicySessionControls</a>

---


### ConditionalAccessPolicyTimeoutsOutputReference <a name="ConditionalAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import conditional_access_policy

conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts">ConditionalAccessPolicyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ConditionalAccessPolicyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts">ConditionalAccessPolicyTimeouts</a>, cdktf.IResolvable]

---



