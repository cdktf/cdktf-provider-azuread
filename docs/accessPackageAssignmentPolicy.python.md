# `accessPackageAssignmentPolicy` Submodule <a name="`accessPackageAssignmentPolicy` Submodule" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessPackageAssignmentPolicy <a name="AccessPackageAssignmentPolicy" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy azuread_access_package_assignment_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_package_id: str,
  description: str,
  display_name: str,
  approval_settings: AccessPackageAssignmentPolicyApprovalSettings = None,
  assignment_review_settings: AccessPackageAssignmentPolicyAssignmentReviewSettings = None,
  duration_in_days: typing.Union[int, float] = None,
  expiration_date: str = None,
  extension_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  question: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestion]] = None,
  requestor_settings: AccessPackageAssignmentPolicyRequestorSettings = None,
  timeouts: AccessPackageAssignmentPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.accessPackageId">access_package_id</a></code> | <code>str</code> | The ID of the access package that will contain the policy. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the policy. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the policy. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.approvalSettings">approval_settings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a></code> | approval_settings block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.assignmentReviewSettings">assignment_review_settings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a></code> | assignment_review_settings block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.durationInDays">duration_in_days</a></code> | <code>typing.Union[int, float]</code> | How many days this assignment is valid for. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.expirationDate">expiration_date</a></code> | <code>str</code> | The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z). |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.extensionEnabled">extension_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled, users will be able to request extension of their access to this package before their access expires. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#id AccessPackageAssignmentPolicy#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.question">question</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>]]</code> | question block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.requestorSettings">requestor_settings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a></code> | requestor_settings block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_package_id`<sup>Required</sup> <a name="access_package_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.accessPackageId"></a>

- *Type:* str

The ID of the access package that will contain the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#access_package_id AccessPackageAssignmentPolicy#access_package_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.description"></a>

- *Type:* str

The description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#description AccessPackageAssignmentPolicy#description}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#display_name AccessPackageAssignmentPolicy#display_name}

---

##### `approval_settings`<sup>Optional</sup> <a name="approval_settings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.approvalSettings"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a>

approval_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#approval_settings AccessPackageAssignmentPolicy#approval_settings}

---

##### `assignment_review_settings`<sup>Optional</sup> <a name="assignment_review_settings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.assignmentReviewSettings"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a>

assignment_review_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#assignment_review_settings AccessPackageAssignmentPolicy#assignment_review_settings}

---

##### `duration_in_days`<sup>Optional</sup> <a name="duration_in_days" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.durationInDays"></a>

- *Type:* typing.Union[int, float]

How many days this assignment is valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#duration_in_days AccessPackageAssignmentPolicy#duration_in_days}

---

##### `expiration_date`<sup>Optional</sup> <a name="expiration_date" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.expirationDate"></a>

- *Type:* str

The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#expiration_date AccessPackageAssignmentPolicy#expiration_date}

---

##### `extension_enabled`<sup>Optional</sup> <a name="extension_enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.extensionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, users will be able to request extension of their access to this package before their access expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#extension_enabled AccessPackageAssignmentPolicy#extension_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#id AccessPackageAssignmentPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Optional</sup> <a name="question" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.question"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>]]

question block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#question AccessPackageAssignmentPolicy#question}

---

##### `requestor_settings`<sup>Optional</sup> <a name="requestor_settings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.requestorSettings"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a>

requestor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#requestor_settings AccessPackageAssignmentPolicy#requestor_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#timeouts AccessPackageAssignmentPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putApprovalSettings">put_approval_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putAssignmentReviewSettings">put_assignment_review_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putQuestion">put_question</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putRequestorSettings">put_requestor_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetApprovalSettings">reset_approval_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetAssignmentReviewSettings">reset_assignment_review_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetDurationInDays">reset_duration_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetExpirationDate">reset_expiration_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetExtensionEnabled">reset_extension_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetQuestion">reset_question</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetRequestorSettings">reset_requestor_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_approval_settings` <a name="put_approval_settings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putApprovalSettings"></a>

```python
def put_approval_settings(
  approval_required: typing.Union[bool, IResolvable] = None,
  approval_required_for_extension: typing.Union[bool, IResolvable] = None,
  approval_stage: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyApprovalSettingsApprovalStage]] = None,
  requestor_justification_required: typing.Union[bool, IResolvable] = None
) -> None
```

###### `approval_required`<sup>Optional</sup> <a name="approval_required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putApprovalSettings.parameter.approvalRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an approval is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#approval_required AccessPackageAssignmentPolicy#approval_required}

---

###### `approval_required_for_extension`<sup>Optional</sup> <a name="approval_required_for_extension" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putApprovalSettings.parameter.approvalRequiredForExtension"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an approval is required to grant extension. Same approval settings used to approve initial access will apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#approval_required_for_extension AccessPackageAssignmentPolicy#approval_required_for_extension}

---

###### `approval_stage`<sup>Optional</sup> <a name="approval_stage" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putApprovalSettings.parameter.approvalStage"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>]]

approval_stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#approval_stage AccessPackageAssignmentPolicy#approval_stage}

---

###### `requestor_justification_required`<sup>Optional</sup> <a name="requestor_justification_required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putApprovalSettings.parameter.requestorJustificationRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether requestor are required to provide a justification to request an access package.

Justification is visible to other approvers and the requestor

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#requestor_justification_required AccessPackageAssignmentPolicy#requestor_justification_required}

---

##### `put_assignment_review_settings` <a name="put_assignment_review_settings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putAssignmentReviewSettings"></a>

```python
def put_assignment_review_settings(
  access_recommendation_enabled: typing.Union[bool, IResolvable] = None,
  access_review_timeout_behavior: str = None,
  approver_justification_required: typing.Union[bool, IResolvable] = None,
  duration_in_days: typing.Union[int, float] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  reviewer: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer]] = None,
  review_frequency: str = None,
  review_type: str = None,
  starting_on: str = None
) -> None
```

###### `access_recommendation_enabled`<sup>Optional</sup> <a name="access_recommendation_enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putAssignmentReviewSettings.parameter.accessRecommendationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to show Show reviewer decision helpers.

If enabled, system recommendations based on users' access information will be shown to the reviewers. The reviewer will be recommended to approve the review if the user has signed-in at least once during the last 30 days. The reviewer will be recommended to deny the review if the user has not signed-in during the last 30 days

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#access_recommendation_enabled AccessPackageAssignmentPolicy#access_recommendation_enabled}

---

###### `access_review_timeout_behavior`<sup>Optional</sup> <a name="access_review_timeout_behavior" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putAssignmentReviewSettings.parameter.accessReviewTimeoutBehavior"></a>

- *Type:* str

What actions the system takes if reviewers don't respond in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#access_review_timeout_behavior AccessPackageAssignmentPolicy#access_review_timeout_behavior}

---

###### `approver_justification_required`<sup>Optional</sup> <a name="approver_justification_required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putAssignmentReviewSettings.parameter.approverJustificationRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a reviewer need provide a justification for their decision. Justification is visible to other reviewers and the requestor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#approver_justification_required AccessPackageAssignmentPolicy#approver_justification_required}

---

###### `duration_in_days`<sup>Optional</sup> <a name="duration_in_days" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putAssignmentReviewSettings.parameter.durationInDays"></a>

- *Type:* typing.Union[int, float]

How many days each occurrence of the access review series will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#duration_in_days AccessPackageAssignmentPolicy#duration_in_days}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putAssignmentReviewSettings.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable assignment review.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#enabled AccessPackageAssignmentPolicy#enabled}

---

###### `reviewer`<sup>Optional</sup> <a name="reviewer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putAssignmentReviewSettings.parameter.reviewer"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>]]

reviewer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#reviewer AccessPackageAssignmentPolicy#reviewer}

---

###### `review_frequency`<sup>Optional</sup> <a name="review_frequency" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putAssignmentReviewSettings.parameter.reviewFrequency"></a>

- *Type:* str

This will determine how often the access review campaign runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#review_frequency AccessPackageAssignmentPolicy#review_frequency}

---

###### `review_type`<sup>Optional</sup> <a name="review_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putAssignmentReviewSettings.parameter.reviewType"></a>

- *Type:* str

Self review or specific reviewers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#review_type AccessPackageAssignmentPolicy#review_type}

---

###### `starting_on`<sup>Optional</sup> <a name="starting_on" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putAssignmentReviewSettings.parameter.startingOn"></a>

- *Type:* str

This is the date the access review campaign will start on, formatted as an RFC3339 date string in UTC(e.g. 2018-01-01T01:02:03Z), default is now. Once an access review has been created, you cannot update its start date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#starting_on AccessPackageAssignmentPolicy#starting_on}

---

##### `put_question` <a name="put_question" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putQuestion"></a>

```python
def put_question(
  value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putQuestion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>]]

---

##### `put_requestor_settings` <a name="put_requestor_settings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putRequestorSettings"></a>

```python
def put_requestor_settings(
  requestor: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyRequestorSettingsRequestor]] = None,
  requests_accepted: typing.Union[bool, IResolvable] = None,
  scope_type: str = None
) -> None
```

###### `requestor`<sup>Optional</sup> <a name="requestor" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putRequestorSettings.parameter.requestor"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>]]

requestor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#requestor AccessPackageAssignmentPolicy#requestor}

---

###### `requests_accepted`<sup>Optional</sup> <a name="requests_accepted" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putRequestorSettings.parameter.requestsAccepted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to accept requests now, when disabled, no new requests can be made using this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#requests_accepted AccessPackageAssignmentPolicy#requests_accepted}

---

###### `scope_type`<sup>Optional</sup> <a name="scope_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putRequestorSettings.parameter.scopeType"></a>

- *Type:* str

Specify the scopes of the requestors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#scope_type AccessPackageAssignmentPolicy#scope_type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#create AccessPackageAssignmentPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#delete AccessPackageAssignmentPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#read AccessPackageAssignmentPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#update AccessPackageAssignmentPolicy#update}.

---

##### `reset_approval_settings` <a name="reset_approval_settings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetApprovalSettings"></a>

```python
def reset_approval_settings() -> None
```

##### `reset_assignment_review_settings` <a name="reset_assignment_review_settings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetAssignmentReviewSettings"></a>

```python
def reset_assignment_review_settings() -> None
```

##### `reset_duration_in_days` <a name="reset_duration_in_days" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetDurationInDays"></a>

```python
def reset_duration_in_days() -> None
```

##### `reset_expiration_date` <a name="reset_expiration_date" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetExpirationDate"></a>

```python
def reset_expiration_date() -> None
```

##### `reset_extension_enabled` <a name="reset_extension_enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetExtensionEnabled"></a>

```python
def reset_extension_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_question` <a name="reset_question" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetQuestion"></a>

```python
def reset_question() -> None
```

##### `reset_requestor_settings` <a name="reset_requestor_settings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetRequestorSettings"></a>

```python
def reset_requestor_settings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AccessPackageAssignmentPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AccessPackageAssignmentPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccessPackageAssignmentPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccessPackageAssignmentPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccessPackageAssignmentPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.approvalSettings">approval_settings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference">AccessPackageAssignmentPolicyApprovalSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.assignmentReviewSettings">assignment_review_settings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference">AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.question">question</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList">AccessPackageAssignmentPolicyQuestionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.requestorSettings">requestor_settings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference">AccessPackageAssignmentPolicyRequestorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference">AccessPackageAssignmentPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.accessPackageIdInput">access_package_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.approvalSettingsInput">approval_settings_input</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.assignmentReviewSettingsInput">assignment_review_settings_input</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.durationInDaysInput">duration_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.expirationDateInput">expiration_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.extensionEnabledInput">extension_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.questionInput">question_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.requestorSettingsInput">requestor_settings_input</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.accessPackageId">access_package_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.durationInDays">duration_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.expirationDate">expiration_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.extensionEnabled">extension_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approval_settings`<sup>Required</sup> <a name="approval_settings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.approvalSettings"></a>

```python
approval_settings: AccessPackageAssignmentPolicyApprovalSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference">AccessPackageAssignmentPolicyApprovalSettingsOutputReference</a>

---

##### `assignment_review_settings`<sup>Required</sup> <a name="assignment_review_settings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.assignmentReviewSettings"></a>

```python
assignment_review_settings: AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference">AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference</a>

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.question"></a>

```python
question: AccessPackageAssignmentPolicyQuestionList
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList">AccessPackageAssignmentPolicyQuestionList</a>

---

##### `requestor_settings`<sup>Required</sup> <a name="requestor_settings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.requestorSettings"></a>

```python
requestor_settings: AccessPackageAssignmentPolicyRequestorSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference">AccessPackageAssignmentPolicyRequestorSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.timeouts"></a>

```python
timeouts: AccessPackageAssignmentPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference">AccessPackageAssignmentPolicyTimeoutsOutputReference</a>

---

##### `access_package_id_input`<sup>Optional</sup> <a name="access_package_id_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.accessPackageIdInput"></a>

```python
access_package_id_input: str
```

- *Type:* str

---

##### `approval_settings_input`<sup>Optional</sup> <a name="approval_settings_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.approvalSettingsInput"></a>

```python
approval_settings_input: AccessPackageAssignmentPolicyApprovalSettings
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a>

---

##### `assignment_review_settings_input`<sup>Optional</sup> <a name="assignment_review_settings_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.assignmentReviewSettingsInput"></a>

```python
assignment_review_settings_input: AccessPackageAssignmentPolicyAssignmentReviewSettings
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `duration_in_days_input`<sup>Optional</sup> <a name="duration_in_days_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.durationInDaysInput"></a>

```python
duration_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expiration_date_input`<sup>Optional</sup> <a name="expiration_date_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.expirationDateInput"></a>

```python
expiration_date_input: str
```

- *Type:* str

---

##### `extension_enabled_input`<sup>Optional</sup> <a name="extension_enabled_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.extensionEnabledInput"></a>

```python
extension_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `question_input`<sup>Optional</sup> <a name="question_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.questionInput"></a>

```python
question_input: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>]]

---

##### `requestor_settings_input`<sup>Optional</sup> <a name="requestor_settings_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.requestorSettingsInput"></a>

```python
requestor_settings_input: AccessPackageAssignmentPolicyRequestorSettings
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AccessPackageAssignmentPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a>]

---

##### `access_package_id`<sup>Required</sup> <a name="access_package_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.accessPackageId"></a>

```python
access_package_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `duration_in_days`<sup>Required</sup> <a name="duration_in_days" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.durationInDays"></a>

```python
duration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

---

##### `extension_enabled`<sup>Required</sup> <a name="extension_enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.extensionEnabled"></a>

```python
extension_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccessPackageAssignmentPolicyApprovalSettings <a name="AccessPackageAssignmentPolicyApprovalSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings(
  approval_required: typing.Union[bool, IResolvable] = None,
  approval_required_for_extension: typing.Union[bool, IResolvable] = None,
  approval_stage: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyApprovalSettingsApprovalStage]] = None,
  requestor_justification_required: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.property.approvalRequired">approval_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether an approval is required. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.property.approvalRequiredForExtension">approval_required_for_extension</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether an approval is required to grant extension. Same approval settings used to approve initial access will apply. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.property.approvalStage">approval_stage</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>]]</code> | approval_stage block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.property.requestorJustificationRequired">requestor_justification_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether requestor are required to provide a justification to request an access package. |

---

##### `approval_required`<sup>Optional</sup> <a name="approval_required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.property.approvalRequired"></a>

```python
approval_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an approval is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#approval_required AccessPackageAssignmentPolicy#approval_required}

---

##### `approval_required_for_extension`<sup>Optional</sup> <a name="approval_required_for_extension" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.property.approvalRequiredForExtension"></a>

```python
approval_required_for_extension: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an approval is required to grant extension. Same approval settings used to approve initial access will apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#approval_required_for_extension AccessPackageAssignmentPolicy#approval_required_for_extension}

---

##### `approval_stage`<sup>Optional</sup> <a name="approval_stage" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.property.approvalStage"></a>

```python
approval_stage: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyApprovalSettingsApprovalStage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>]]

approval_stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#approval_stage AccessPackageAssignmentPolicy#approval_stage}

---

##### `requestor_justification_required`<sup>Optional</sup> <a name="requestor_justification_required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.property.requestorJustificationRequired"></a>

```python
requestor_justification_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether requestor are required to provide a justification to request an access package.

Justification is visible to other approvers and the requestor

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#requestor_justification_required AccessPackageAssignmentPolicy#requestor_justification_required}

---

### AccessPackageAssignmentPolicyApprovalSettingsApprovalStage <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStage" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage(
  approval_timeout_in_days: typing.Union[int, float],
  alternative_approval_enabled: typing.Union[bool, IResolvable] = None,
  alternative_approver: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover]] = None,
  approver_justification_required: typing.Union[bool, IResolvable] = None,
  enable_alternative_approval_in_days: typing.Union[int, float] = None,
  primary_approver: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.approvalTimeoutInDays">approval_timeout_in_days</a></code> | <code>typing.Union[int, float]</code> | Decision must be made in how many days? |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.alternativeApprovalEnabled">alternative_approval_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If no action taken, forward to alternate approvers? |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.alternativeApprover">alternative_approver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>]]</code> | alternative_approver block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.approverJustificationRequired">approver_justification_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether an approver must provide a justification for their decision. Justification is visible to other approvers and the requestor. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.enableAlternativeApprovalInDays">enable_alternative_approval_in_days</a></code> | <code>typing.Union[int, float]</code> | Forward to alternate approver(s) after how many days? |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.primaryApprover">primary_approver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>]]</code> | primary_approver block. |

---

##### `approval_timeout_in_days`<sup>Required</sup> <a name="approval_timeout_in_days" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.approvalTimeoutInDays"></a>

```python
approval_timeout_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Decision must be made in how many days?

If a request is not approved within this time period after it is made, it will be automatically rejected

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#approval_timeout_in_days AccessPackageAssignmentPolicy#approval_timeout_in_days}

---

##### `alternative_approval_enabled`<sup>Optional</sup> <a name="alternative_approval_enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.alternativeApprovalEnabled"></a>

```python
alternative_approval_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If no action taken, forward to alternate approvers?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#alternative_approval_enabled AccessPackageAssignmentPolicy#alternative_approval_enabled}

---

##### `alternative_approver`<sup>Optional</sup> <a name="alternative_approver" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.alternativeApprover"></a>

```python
alternative_approver: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>]]

alternative_approver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#alternative_approver AccessPackageAssignmentPolicy#alternative_approver}

---

##### `approver_justification_required`<sup>Optional</sup> <a name="approver_justification_required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.approverJustificationRequired"></a>

```python
approver_justification_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an approver must provide a justification for their decision. Justification is visible to other approvers and the requestor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#approver_justification_required AccessPackageAssignmentPolicy#approver_justification_required}

---

##### `enable_alternative_approval_in_days`<sup>Optional</sup> <a name="enable_alternative_approval_in_days" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.enableAlternativeApprovalInDays"></a>

```python
enable_alternative_approval_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Forward to alternate approver(s) after how many days?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#enable_alternative_approval_in_days AccessPackageAssignmentPolicy#enable_alternative_approval_in_days}

---

##### `primary_approver`<sup>Optional</sup> <a name="primary_approver" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.primaryApprover"></a>

```python
primary_approver: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>]]

primary_approver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#primary_approver AccessPackageAssignmentPolicy#primary_approver}

---

### AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover(
  subject_type: str,
  backup: typing.Union[bool, IResolvable] = None,
  object_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover.property.subjectType">subject_type</a></code> | <code>str</code> | Type of users. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover.property.backup">backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | For a user in an approval stage, this property indicates whether the user is a backup fallback approver. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover.property.objectId">object_id</a></code> | <code>str</code> | The object ID of the subject. |

---

##### `subject_type`<sup>Required</sup> <a name="subject_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover.property.subjectType"></a>

```python
subject_type: str
```

- *Type:* str

Type of users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#subject_type AccessPackageAssignmentPolicy#subject_type}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover.property.backup"></a>

```python
backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

For a user in an approval stage, this property indicates whether the user is a backup fallback approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#backup AccessPackageAssignmentPolicy#backup}

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

The object ID of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#object_id AccessPackageAssignmentPolicy#object_id}

---

### AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover(
  subject_type: str,
  backup: typing.Union[bool, IResolvable] = None,
  object_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover.property.subjectType">subject_type</a></code> | <code>str</code> | Type of users. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover.property.backup">backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | For a user in an approval stage, this property indicates whether the user is a backup fallback approver. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover.property.objectId">object_id</a></code> | <code>str</code> | The object ID of the subject. |

---

##### `subject_type`<sup>Required</sup> <a name="subject_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover.property.subjectType"></a>

```python
subject_type: str
```

- *Type:* str

Type of users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#subject_type AccessPackageAssignmentPolicy#subject_type}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover.property.backup"></a>

```python
backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

For a user in an approval stage, this property indicates whether the user is a backup fallback approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#backup AccessPackageAssignmentPolicy#backup}

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

The object ID of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#object_id AccessPackageAssignmentPolicy#object_id}

---

### AccessPackageAssignmentPolicyAssignmentReviewSettings <a name="AccessPackageAssignmentPolicyAssignmentReviewSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings(
  access_recommendation_enabled: typing.Union[bool, IResolvable] = None,
  access_review_timeout_behavior: str = None,
  approver_justification_required: typing.Union[bool, IResolvable] = None,
  duration_in_days: typing.Union[int, float] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  reviewer: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer]] = None,
  review_frequency: str = None,
  review_type: str = None,
  starting_on: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.accessRecommendationEnabled">access_recommendation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to show Show reviewer decision helpers. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.accessReviewTimeoutBehavior">access_review_timeout_behavior</a></code> | <code>str</code> | What actions the system takes if reviewers don't respond in time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.approverJustificationRequired">approver_justification_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether a reviewer need provide a justification for their decision. Justification is visible to other reviewers and the requestor. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.durationInDays">duration_in_days</a></code> | <code>typing.Union[int, float]</code> | How many days each occurrence of the access review series will run. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable assignment review. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.reviewer">reviewer</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>]]</code> | reviewer block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.reviewFrequency">review_frequency</a></code> | <code>str</code> | This will determine how often the access review campaign runs. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.reviewType">review_type</a></code> | <code>str</code> | Self review or specific reviewers. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.startingOn">starting_on</a></code> | <code>str</code> | This is the date the access review campaign will start on, formatted as an RFC3339 date string in UTC(e.g. 2018-01-01T01:02:03Z), default is now. Once an access review has been created, you cannot update its start date. |

---

##### `access_recommendation_enabled`<sup>Optional</sup> <a name="access_recommendation_enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.accessRecommendationEnabled"></a>

```python
access_recommendation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to show Show reviewer decision helpers.

If enabled, system recommendations based on users' access information will be shown to the reviewers. The reviewer will be recommended to approve the review if the user has signed-in at least once during the last 30 days. The reviewer will be recommended to deny the review if the user has not signed-in during the last 30 days

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#access_recommendation_enabled AccessPackageAssignmentPolicy#access_recommendation_enabled}

---

##### `access_review_timeout_behavior`<sup>Optional</sup> <a name="access_review_timeout_behavior" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.accessReviewTimeoutBehavior"></a>

```python
access_review_timeout_behavior: str
```

- *Type:* str

What actions the system takes if reviewers don't respond in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#access_review_timeout_behavior AccessPackageAssignmentPolicy#access_review_timeout_behavior}

---

##### `approver_justification_required`<sup>Optional</sup> <a name="approver_justification_required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.approverJustificationRequired"></a>

```python
approver_justification_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a reviewer need provide a justification for their decision. Justification is visible to other reviewers and the requestor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#approver_justification_required AccessPackageAssignmentPolicy#approver_justification_required}

---

##### `duration_in_days`<sup>Optional</sup> <a name="duration_in_days" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.durationInDays"></a>

```python
duration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many days each occurrence of the access review series will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#duration_in_days AccessPackageAssignmentPolicy#duration_in_days}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable assignment review.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#enabled AccessPackageAssignmentPolicy#enabled}

---

##### `reviewer`<sup>Optional</sup> <a name="reviewer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.reviewer"></a>

```python
reviewer: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>]]

reviewer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#reviewer AccessPackageAssignmentPolicy#reviewer}

---

##### `review_frequency`<sup>Optional</sup> <a name="review_frequency" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.reviewFrequency"></a>

```python
review_frequency: str
```

- *Type:* str

This will determine how often the access review campaign runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#review_frequency AccessPackageAssignmentPolicy#review_frequency}

---

##### `review_type`<sup>Optional</sup> <a name="review_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.reviewType"></a>

```python
review_type: str
```

- *Type:* str

Self review or specific reviewers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#review_type AccessPackageAssignmentPolicy#review_type}

---

##### `starting_on`<sup>Optional</sup> <a name="starting_on" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.startingOn"></a>

```python
starting_on: str
```

- *Type:* str

This is the date the access review campaign will start on, formatted as an RFC3339 date string in UTC(e.g. 2018-01-01T01:02:03Z), default is now. Once an access review has been created, you cannot update its start date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#starting_on AccessPackageAssignmentPolicy#starting_on}

---

### AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer <a name="AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer(
  subject_type: str,
  backup: typing.Union[bool, IResolvable] = None,
  object_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer.property.subjectType">subject_type</a></code> | <code>str</code> | Type of users. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer.property.backup">backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | For a user in an approval stage, this property indicates whether the user is a backup fallback approver. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer.property.objectId">object_id</a></code> | <code>str</code> | The object ID of the subject. |

---

##### `subject_type`<sup>Required</sup> <a name="subject_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer.property.subjectType"></a>

```python
subject_type: str
```

- *Type:* str

Type of users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#subject_type AccessPackageAssignmentPolicy#subject_type}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer.property.backup"></a>

```python
backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

For a user in an approval stage, this property indicates whether the user is a backup fallback approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#backup AccessPackageAssignmentPolicy#backup}

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

The object ID of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#object_id AccessPackageAssignmentPolicy#object_id}

---

### AccessPackageAssignmentPolicyConfig <a name="AccessPackageAssignmentPolicyConfig" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_package_id: str,
  description: str,
  display_name: str,
  approval_settings: AccessPackageAssignmentPolicyApprovalSettings = None,
  assignment_review_settings: AccessPackageAssignmentPolicyAssignmentReviewSettings = None,
  duration_in_days: typing.Union[int, float] = None,
  expiration_date: str = None,
  extension_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  question: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestion]] = None,
  requestor_settings: AccessPackageAssignmentPolicyRequestorSettings = None,
  timeouts: AccessPackageAssignmentPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.accessPackageId">access_package_id</a></code> | <code>str</code> | The ID of the access package that will contain the policy. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.description">description</a></code> | <code>str</code> | The description of the policy. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the policy. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.approvalSettings">approval_settings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a></code> | approval_settings block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.assignmentReviewSettings">assignment_review_settings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a></code> | assignment_review_settings block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.durationInDays">duration_in_days</a></code> | <code>typing.Union[int, float]</code> | How many days this assignment is valid for. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.expirationDate">expiration_date</a></code> | <code>str</code> | The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z). |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.extensionEnabled">extension_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled, users will be able to request extension of their access to this package before their access expires. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#id AccessPackageAssignmentPolicy#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.question">question</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>]]</code> | question block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.requestorSettings">requestor_settings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a></code> | requestor_settings block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_package_id`<sup>Required</sup> <a name="access_package_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.accessPackageId"></a>

```python
access_package_id: str
```

- *Type:* str

The ID of the access package that will contain the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#access_package_id AccessPackageAssignmentPolicy#access_package_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#description AccessPackageAssignmentPolicy#description}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#display_name AccessPackageAssignmentPolicy#display_name}

---

##### `approval_settings`<sup>Optional</sup> <a name="approval_settings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.approvalSettings"></a>

```python
approval_settings: AccessPackageAssignmentPolicyApprovalSettings
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a>

approval_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#approval_settings AccessPackageAssignmentPolicy#approval_settings}

---

##### `assignment_review_settings`<sup>Optional</sup> <a name="assignment_review_settings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.assignmentReviewSettings"></a>

```python
assignment_review_settings: AccessPackageAssignmentPolicyAssignmentReviewSettings
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a>

assignment_review_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#assignment_review_settings AccessPackageAssignmentPolicy#assignment_review_settings}

---

##### `duration_in_days`<sup>Optional</sup> <a name="duration_in_days" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.durationInDays"></a>

```python
duration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many days this assignment is valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#duration_in_days AccessPackageAssignmentPolicy#duration_in_days}

---

##### `expiration_date`<sup>Optional</sup> <a name="expiration_date" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#expiration_date AccessPackageAssignmentPolicy#expiration_date}

---

##### `extension_enabled`<sup>Optional</sup> <a name="extension_enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.extensionEnabled"></a>

```python
extension_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, users will be able to request extension of their access to this package before their access expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#extension_enabled AccessPackageAssignmentPolicy#extension_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#id AccessPackageAssignmentPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Optional</sup> <a name="question" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.question"></a>

```python
question: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>]]

question block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#question AccessPackageAssignmentPolicy#question}

---

##### `requestor_settings`<sup>Optional</sup> <a name="requestor_settings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.requestorSettings"></a>

```python
requestor_settings: AccessPackageAssignmentPolicyRequestorSettings
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a>

requestor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#requestor_settings AccessPackageAssignmentPolicy#requestor_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.timeouts"></a>

```python
timeouts: AccessPackageAssignmentPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#timeouts AccessPackageAssignmentPolicy#timeouts}

---

### AccessPackageAssignmentPolicyQuestion <a name="AccessPackageAssignmentPolicyQuestion" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion(
  text: AccessPackageAssignmentPolicyQuestionText,
  choice: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionChoice]] = None,
  required: typing.Union[bool, IResolvable] = None,
  sequence: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.property.text">text</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText">AccessPackageAssignmentPolicyQuestionText</a></code> | text block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.property.choice">choice</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>]]</code> | choice block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this question is required. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.property.sequence">sequence</a></code> | <code>typing.Union[int, float]</code> | The sequence number of this question. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.property.text"></a>

```python
text: AccessPackageAssignmentPolicyQuestionText
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText">AccessPackageAssignmentPolicyQuestionText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#text AccessPackageAssignmentPolicy#text}

---

##### `choice`<sup>Optional</sup> <a name="choice" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.property.choice"></a>

```python
choice: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionChoice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>]]

choice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#choice AccessPackageAssignmentPolicy#choice}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this question is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#required AccessPackageAssignmentPolicy#required}

---

##### `sequence`<sup>Optional</sup> <a name="sequence" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.property.sequence"></a>

```python
sequence: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sequence number of this question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#sequence AccessPackageAssignmentPolicy#sequence}

---

### AccessPackageAssignmentPolicyQuestionChoice <a name="AccessPackageAssignmentPolicyQuestionChoice" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice(
  actual_value: str,
  display_value: AccessPackageAssignmentPolicyQuestionChoiceDisplayValue
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice.property.actualValue">actual_value</a></code> | <code>str</code> | The actual value of this choice. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice.property.displayValue">display_value</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue">AccessPackageAssignmentPolicyQuestionChoiceDisplayValue</a></code> | display_value block. |

---

##### `actual_value`<sup>Required</sup> <a name="actual_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice.property.actualValue"></a>

```python
actual_value: str
```

- *Type:* str

The actual value of this choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#actual_value AccessPackageAssignmentPolicy#actual_value}

---

##### `display_value`<sup>Required</sup> <a name="display_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice.property.displayValue"></a>

```python
display_value: AccessPackageAssignmentPolicyQuestionChoiceDisplayValue
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue">AccessPackageAssignmentPolicyQuestionChoiceDisplayValue</a>

display_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#display_value AccessPackageAssignmentPolicy#display_value}

---

### AccessPackageAssignmentPolicyQuestionChoiceDisplayValue <a name="AccessPackageAssignmentPolicyQuestionChoiceDisplayValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue(
  default_text: str,
  localized_text: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue.property.defaultText">default_text</a></code> | <code>str</code> | The default text of this question. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue.property.localizedText">localized_text</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>]]</code> | localized_text block. |

---

##### `default_text`<sup>Required</sup> <a name="default_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue.property.defaultText"></a>

```python
default_text: str
```

- *Type:* str

The default text of this question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#default_text AccessPackageAssignmentPolicy#default_text}

---

##### `localized_text`<sup>Optional</sup> <a name="localized_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue.property.localizedText"></a>

```python
localized_text: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>]]

localized_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#localized_text AccessPackageAssignmentPolicy#localized_text}

---

### AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText <a name="AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText(
  content: str,
  language_code: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText.property.content">content</a></code> | <code>str</code> | The localized content of this question. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText.property.languageCode">language_code</a></code> | <code>str</code> | The language code of this question content. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText.property.content"></a>

```python
content: str
```

- *Type:* str

The localized content of this question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#content AccessPackageAssignmentPolicy#content}

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

The language code of this question content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#language_code AccessPackageAssignmentPolicy#language_code}

---

### AccessPackageAssignmentPolicyQuestionText <a name="AccessPackageAssignmentPolicyQuestionText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText(
  default_text: str,
  localized_text: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionTextLocalizedText]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText.property.defaultText">default_text</a></code> | <code>str</code> | The default text of this question. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText.property.localizedText">localized_text</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>]]</code> | localized_text block. |

---

##### `default_text`<sup>Required</sup> <a name="default_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText.property.defaultText"></a>

```python
default_text: str
```

- *Type:* str

The default text of this question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#default_text AccessPackageAssignmentPolicy#default_text}

---

##### `localized_text`<sup>Optional</sup> <a name="localized_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText.property.localizedText"></a>

```python
localized_text: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionTextLocalizedText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>]]

localized_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#localized_text AccessPackageAssignmentPolicy#localized_text}

---

### AccessPackageAssignmentPolicyQuestionTextLocalizedText <a name="AccessPackageAssignmentPolicyQuestionTextLocalizedText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText(
  content: str,
  language_code: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText.property.content">content</a></code> | <code>str</code> | The localized content of this question. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText.property.languageCode">language_code</a></code> | <code>str</code> | The language code of this question content. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText.property.content"></a>

```python
content: str
```

- *Type:* str

The localized content of this question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#content AccessPackageAssignmentPolicy#content}

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

The language code of this question content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#language_code AccessPackageAssignmentPolicy#language_code}

---

### AccessPackageAssignmentPolicyRequestorSettings <a name="AccessPackageAssignmentPolicyRequestorSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings(
  requestor: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyRequestorSettingsRequestor]] = None,
  requests_accepted: typing.Union[bool, IResolvable] = None,
  scope_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings.property.requestor">requestor</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>]]</code> | requestor block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings.property.requestsAccepted">requests_accepted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to accept requests now, when disabled, no new requests can be made using this policy. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings.property.scopeType">scope_type</a></code> | <code>str</code> | Specify the scopes of the requestors. |

---

##### `requestor`<sup>Optional</sup> <a name="requestor" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings.property.requestor"></a>

```python
requestor: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyRequestorSettingsRequestor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>]]

requestor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#requestor AccessPackageAssignmentPolicy#requestor}

---

##### `requests_accepted`<sup>Optional</sup> <a name="requests_accepted" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings.property.requestsAccepted"></a>

```python
requests_accepted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to accept requests now, when disabled, no new requests can be made using this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#requests_accepted AccessPackageAssignmentPolicy#requests_accepted}

---

##### `scope_type`<sup>Optional</sup> <a name="scope_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings.property.scopeType"></a>

```python
scope_type: str
```

- *Type:* str

Specify the scopes of the requestors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#scope_type AccessPackageAssignmentPolicy#scope_type}

---

### AccessPackageAssignmentPolicyRequestorSettingsRequestor <a name="AccessPackageAssignmentPolicyRequestorSettingsRequestor" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor(
  subject_type: str,
  backup: typing.Union[bool, IResolvable] = None,
  object_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor.property.subjectType">subject_type</a></code> | <code>str</code> | Type of users. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor.property.backup">backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | For a user in an approval stage, this property indicates whether the user is a backup fallback approver. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor.property.objectId">object_id</a></code> | <code>str</code> | The object ID of the subject. |

---

##### `subject_type`<sup>Required</sup> <a name="subject_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor.property.subjectType"></a>

```python
subject_type: str
```

- *Type:* str

Type of users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#subject_type AccessPackageAssignmentPolicy#subject_type}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor.property.backup"></a>

```python
backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

For a user in an approval stage, this property indicates whether the user is a backup fallback approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#backup AccessPackageAssignmentPolicy#backup}

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

The object ID of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#object_id AccessPackageAssignmentPolicy#object_id}

---

### AccessPackageAssignmentPolicyTimeouts <a name="AccessPackageAssignmentPolicyTimeouts" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#create AccessPackageAssignmentPolicy#create}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#delete AccessPackageAssignmentPolicy#delete}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#read AccessPackageAssignmentPolicy#read}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#update AccessPackageAssignmentPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#create AccessPackageAssignmentPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#delete AccessPackageAssignmentPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#read AccessPackageAssignmentPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#update AccessPackageAssignmentPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>]]

---


### AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.resetBackup">reset_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.resetObjectId">reset_object_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup` <a name="reset_backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.resetBackup"></a>

```python
def reset_backup() -> None
```

##### `reset_object_id` <a name="reset_object_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.resetObjectId"></a>

```python
def reset_object_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.backupInput">backup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.subjectTypeInput">subject_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.backup">backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.subjectType">subject_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_input`<sup>Optional</sup> <a name="backup_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.backupInput"></a>

```python
backup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `subject_type_input`<sup>Optional</sup> <a name="subject_type_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.subjectTypeInput"></a>

```python
subject_type_input: str
```

- *Type:* str

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.backup"></a>

```python
backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `subject_type`<sup>Required</sup> <a name="subject_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.subjectType"></a>

```python
subject_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>]

---


### AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyApprovalSettingsApprovalStage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>]]

---


### AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.putAlternativeApprover">put_alternative_approver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.putPrimaryApprover">put_primary_approver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetAlternativeApprovalEnabled">reset_alternative_approval_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetAlternativeApprover">reset_alternative_approver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetApproverJustificationRequired">reset_approver_justification_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetEnableAlternativeApprovalInDays">reset_enable_alternative_approval_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetPrimaryApprover">reset_primary_approver</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_alternative_approver` <a name="put_alternative_approver" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.putAlternativeApprover"></a>

```python
def put_alternative_approver(
  value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.putAlternativeApprover.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>]]

---

##### `put_primary_approver` <a name="put_primary_approver" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.putPrimaryApprover"></a>

```python
def put_primary_approver(
  value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.putPrimaryApprover.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>]]

---

##### `reset_alternative_approval_enabled` <a name="reset_alternative_approval_enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetAlternativeApprovalEnabled"></a>

```python
def reset_alternative_approval_enabled() -> None
```

##### `reset_alternative_approver` <a name="reset_alternative_approver" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetAlternativeApprover"></a>

```python
def reset_alternative_approver() -> None
```

##### `reset_approver_justification_required` <a name="reset_approver_justification_required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetApproverJustificationRequired"></a>

```python
def reset_approver_justification_required() -> None
```

##### `reset_enable_alternative_approval_in_days` <a name="reset_enable_alternative_approval_in_days" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetEnableAlternativeApprovalInDays"></a>

```python
def reset_enable_alternative_approval_in_days() -> None
```

##### `reset_primary_approver` <a name="reset_primary_approver" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetPrimaryApprover"></a>

```python
def reset_primary_approver() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.alternativeApprover">alternative_approver</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.primaryApprover">primary_approver</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.alternativeApprovalEnabledInput">alternative_approval_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.alternativeApproverInput">alternative_approver_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.approvalTimeoutInDaysInput">approval_timeout_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.approverJustificationRequiredInput">approver_justification_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.enableAlternativeApprovalInDaysInput">enable_alternative_approval_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.primaryApproverInput">primary_approver_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.alternativeApprovalEnabled">alternative_approval_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.approvalTimeoutInDays">approval_timeout_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.approverJustificationRequired">approver_justification_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.enableAlternativeApprovalInDays">enable_alternative_approval_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alternative_approver`<sup>Required</sup> <a name="alternative_approver" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.alternativeApprover"></a>

```python
alternative_approver: AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList</a>

---

##### `primary_approver`<sup>Required</sup> <a name="primary_approver" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.primaryApprover"></a>

```python
primary_approver: AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList</a>

---

##### `alternative_approval_enabled_input`<sup>Optional</sup> <a name="alternative_approval_enabled_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.alternativeApprovalEnabledInput"></a>

```python
alternative_approval_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `alternative_approver_input`<sup>Optional</sup> <a name="alternative_approver_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.alternativeApproverInput"></a>

```python
alternative_approver_input: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>]]

---

##### `approval_timeout_in_days_input`<sup>Optional</sup> <a name="approval_timeout_in_days_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.approvalTimeoutInDaysInput"></a>

```python
approval_timeout_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approver_justification_required_input`<sup>Optional</sup> <a name="approver_justification_required_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.approverJustificationRequiredInput"></a>

```python
approver_justification_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_alternative_approval_in_days_input`<sup>Optional</sup> <a name="enable_alternative_approval_in_days_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.enableAlternativeApprovalInDaysInput"></a>

```python
enable_alternative_approval_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `primary_approver_input`<sup>Optional</sup> <a name="primary_approver_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.primaryApproverInput"></a>

```python
primary_approver_input: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>]]

---

##### `alternative_approval_enabled`<sup>Required</sup> <a name="alternative_approval_enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.alternativeApprovalEnabled"></a>

```python
alternative_approval_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `approval_timeout_in_days`<sup>Required</sup> <a name="approval_timeout_in_days" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.approvalTimeoutInDays"></a>

```python
approval_timeout_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approver_justification_required`<sup>Required</sup> <a name="approver_justification_required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.approverJustificationRequired"></a>

```python
approver_justification_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_alternative_approval_in_days`<sup>Required</sup> <a name="enable_alternative_approval_in_days" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.enableAlternativeApprovalInDays"></a>

```python
enable_alternative_approval_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPackageAssignmentPolicyApprovalSettingsApprovalStage]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>]

---


### AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>]]

---


### AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.resetBackup">reset_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.resetObjectId">reset_object_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup` <a name="reset_backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.resetBackup"></a>

```python
def reset_backup() -> None
```

##### `reset_object_id` <a name="reset_object_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.resetObjectId"></a>

```python
def reset_object_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.backupInput">backup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.subjectTypeInput">subject_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.backup">backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.subjectType">subject_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_input`<sup>Optional</sup> <a name="backup_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.backupInput"></a>

```python
backup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `subject_type_input`<sup>Optional</sup> <a name="subject_type_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.subjectTypeInput"></a>

```python
subject_type_input: str
```

- *Type:* str

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.backup"></a>

```python
backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `subject_type`<sup>Required</sup> <a name="subject_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.subjectType"></a>

```python
subject_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>]

---


### AccessPackageAssignmentPolicyApprovalSettingsOutputReference <a name="AccessPackageAssignmentPolicyApprovalSettingsOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.putApprovalStage">put_approval_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resetApprovalRequired">reset_approval_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resetApprovalRequiredForExtension">reset_approval_required_for_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resetApprovalStage">reset_approval_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resetRequestorJustificationRequired">reset_requestor_justification_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_approval_stage` <a name="put_approval_stage" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.putApprovalStage"></a>

```python
def put_approval_stage(
  value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyApprovalSettingsApprovalStage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.putApprovalStage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>]]

---

##### `reset_approval_required` <a name="reset_approval_required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resetApprovalRequired"></a>

```python
def reset_approval_required() -> None
```

##### `reset_approval_required_for_extension` <a name="reset_approval_required_for_extension" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resetApprovalRequiredForExtension"></a>

```python
def reset_approval_required_for_extension() -> None
```

##### `reset_approval_stage` <a name="reset_approval_stage" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resetApprovalStage"></a>

```python
def reset_approval_stage() -> None
```

##### `reset_requestor_justification_required` <a name="reset_requestor_justification_required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resetRequestorJustificationRequired"></a>

```python
def reset_requestor_justification_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalStage">approval_stage</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalRequiredForExtensionInput">approval_required_for_extension_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalRequiredInput">approval_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalStageInput">approval_stage_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.requestorJustificationRequiredInput">requestor_justification_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalRequired">approval_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalRequiredForExtension">approval_required_for_extension</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.requestorJustificationRequired">requestor_justification_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_stage`<sup>Required</sup> <a name="approval_stage" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalStage"></a>

```python
approval_stage: AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList</a>

---

##### `approval_required_for_extension_input`<sup>Optional</sup> <a name="approval_required_for_extension_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalRequiredForExtensionInput"></a>

```python
approval_required_for_extension_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `approval_required_input`<sup>Optional</sup> <a name="approval_required_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalRequiredInput"></a>

```python
approval_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `approval_stage_input`<sup>Optional</sup> <a name="approval_stage_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalStageInput"></a>

```python
approval_stage_input: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyApprovalSettingsApprovalStage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>]]

---

##### `requestor_justification_required_input`<sup>Optional</sup> <a name="requestor_justification_required_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.requestorJustificationRequiredInput"></a>

```python
requestor_justification_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `approval_required`<sup>Required</sup> <a name="approval_required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalRequired"></a>

```python
approval_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `approval_required_for_extension`<sup>Required</sup> <a name="approval_required_for_extension" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalRequiredForExtension"></a>

```python
approval_required_for_extension: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `requestor_justification_required`<sup>Required</sup> <a name="requestor_justification_required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.requestorJustificationRequired"></a>

```python
requestor_justification_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.internalValue"></a>

```python
internal_value: AccessPackageAssignmentPolicyApprovalSettings
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a>

---


### AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference <a name="AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.putReviewer">put_reviewer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetAccessRecommendationEnabled">reset_access_recommendation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetAccessReviewTimeoutBehavior">reset_access_review_timeout_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetApproverJustificationRequired">reset_approver_justification_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetDurationInDays">reset_duration_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetReviewer">reset_reviewer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetReviewFrequency">reset_review_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetReviewType">reset_review_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetStartingOn">reset_starting_on</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_reviewer` <a name="put_reviewer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.putReviewer"></a>

```python
def put_reviewer(
  value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.putReviewer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>]]

---

##### `reset_access_recommendation_enabled` <a name="reset_access_recommendation_enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetAccessRecommendationEnabled"></a>

```python
def reset_access_recommendation_enabled() -> None
```

##### `reset_access_review_timeout_behavior` <a name="reset_access_review_timeout_behavior" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetAccessReviewTimeoutBehavior"></a>

```python
def reset_access_review_timeout_behavior() -> None
```

##### `reset_approver_justification_required` <a name="reset_approver_justification_required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetApproverJustificationRequired"></a>

```python
def reset_approver_justification_required() -> None
```

##### `reset_duration_in_days` <a name="reset_duration_in_days" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetDurationInDays"></a>

```python
def reset_duration_in_days() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_reviewer` <a name="reset_reviewer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetReviewer"></a>

```python
def reset_reviewer() -> None
```

##### `reset_review_frequency` <a name="reset_review_frequency" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetReviewFrequency"></a>

```python
def reset_review_frequency() -> None
```

##### `reset_review_type` <a name="reset_review_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetReviewType"></a>

```python
def reset_review_type() -> None
```

##### `reset_starting_on` <a name="reset_starting_on" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetStartingOn"></a>

```python
def reset_starting_on() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewer">reviewer</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.accessRecommendationEnabledInput">access_recommendation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.accessReviewTimeoutBehaviorInput">access_review_timeout_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.approverJustificationRequiredInput">approver_justification_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.durationInDaysInput">duration_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewerInput">reviewer_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewFrequencyInput">review_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewTypeInput">review_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.startingOnInput">starting_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.accessRecommendationEnabled">access_recommendation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.accessReviewTimeoutBehavior">access_review_timeout_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.approverJustificationRequired">approver_justification_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.durationInDays">duration_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewFrequency">review_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewType">review_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.startingOn">starting_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reviewer`<sup>Required</sup> <a name="reviewer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewer"></a>

```python
reviewer: AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList</a>

---

##### `access_recommendation_enabled_input`<sup>Optional</sup> <a name="access_recommendation_enabled_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.accessRecommendationEnabledInput"></a>

```python
access_recommendation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_review_timeout_behavior_input`<sup>Optional</sup> <a name="access_review_timeout_behavior_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.accessReviewTimeoutBehaviorInput"></a>

```python
access_review_timeout_behavior_input: str
```

- *Type:* str

---

##### `approver_justification_required_input`<sup>Optional</sup> <a name="approver_justification_required_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.approverJustificationRequiredInput"></a>

```python
approver_justification_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `duration_in_days_input`<sup>Optional</sup> <a name="duration_in_days_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.durationInDaysInput"></a>

```python
duration_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reviewer_input`<sup>Optional</sup> <a name="reviewer_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewerInput"></a>

```python
reviewer_input: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>]]

---

##### `review_frequency_input`<sup>Optional</sup> <a name="review_frequency_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewFrequencyInput"></a>

```python
review_frequency_input: str
```

- *Type:* str

---

##### `review_type_input`<sup>Optional</sup> <a name="review_type_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewTypeInput"></a>

```python
review_type_input: str
```

- *Type:* str

---

##### `starting_on_input`<sup>Optional</sup> <a name="starting_on_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.startingOnInput"></a>

```python
starting_on_input: str
```

- *Type:* str

---

##### `access_recommendation_enabled`<sup>Required</sup> <a name="access_recommendation_enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.accessRecommendationEnabled"></a>

```python
access_recommendation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_review_timeout_behavior`<sup>Required</sup> <a name="access_review_timeout_behavior" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.accessReviewTimeoutBehavior"></a>

```python
access_review_timeout_behavior: str
```

- *Type:* str

---

##### `approver_justification_required`<sup>Required</sup> <a name="approver_justification_required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.approverJustificationRequired"></a>

```python
approver_justification_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `duration_in_days`<sup>Required</sup> <a name="duration_in_days" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.durationInDays"></a>

```python
duration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `review_frequency`<sup>Required</sup> <a name="review_frequency" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewFrequency"></a>

```python
review_frequency: str
```

- *Type:* str

---

##### `review_type`<sup>Required</sup> <a name="review_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewType"></a>

```python
review_type: str
```

- *Type:* str

---

##### `starting_on`<sup>Required</sup> <a name="starting_on" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.startingOn"></a>

```python
starting_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.internalValue"></a>

```python
internal_value: AccessPackageAssignmentPolicyAssignmentReviewSettings
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a>

---


### AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList <a name="AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>]]

---


### AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference <a name="AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.resetBackup">reset_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.resetObjectId">reset_object_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup` <a name="reset_backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.resetBackup"></a>

```python
def reset_backup() -> None
```

##### `reset_object_id` <a name="reset_object_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.resetObjectId"></a>

```python
def reset_object_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.backupInput">backup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.subjectTypeInput">subject_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.backup">backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.subjectType">subject_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_input`<sup>Optional</sup> <a name="backup_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.backupInput"></a>

```python
backup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `subject_type_input`<sup>Optional</sup> <a name="subject_type_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.subjectTypeInput"></a>

```python
subject_type_input: str
```

- *Type:* str

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.backup"></a>

```python
backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `subject_type`<sup>Required</sup> <a name="subject_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.subjectType"></a>

```python
subject_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>]

---


### AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList <a name="AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>]]

---


### AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference <a name="AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>]

---


### AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference <a name="AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.putLocalizedText">put_localized_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.resetLocalizedText">reset_localized_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_localized_text` <a name="put_localized_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.putLocalizedText"></a>

```python
def put_localized_text(
  value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.putLocalizedText.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>]]

---

##### `reset_localized_text` <a name="reset_localized_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.resetLocalizedText"></a>

```python
def reset_localized_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.localizedText">localized_text</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.defaultTextInput">default_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.localizedTextInput">localized_text_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.defaultText">default_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue">AccessPackageAssignmentPolicyQuestionChoiceDisplayValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `localized_text`<sup>Required</sup> <a name="localized_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.localizedText"></a>

```python
localized_text: AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList</a>

---

##### `default_text_input`<sup>Optional</sup> <a name="default_text_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.defaultTextInput"></a>

```python
default_text_input: str
```

- *Type:* str

---

##### `localized_text_input`<sup>Optional</sup> <a name="localized_text_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.localizedTextInput"></a>

```python
localized_text_input: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>]]

---

##### `default_text`<sup>Required</sup> <a name="default_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.defaultText"></a>

```python
default_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.internalValue"></a>

```python
internal_value: AccessPackageAssignmentPolicyQuestionChoiceDisplayValue
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue">AccessPackageAssignmentPolicyQuestionChoiceDisplayValue</a>

---


### AccessPackageAssignmentPolicyQuestionChoiceList <a name="AccessPackageAssignmentPolicyQuestionChoiceList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPackageAssignmentPolicyQuestionChoiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionChoice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>]]

---


### AccessPackageAssignmentPolicyQuestionChoiceOutputReference <a name="AccessPackageAssignmentPolicyQuestionChoiceOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.putDisplayValue">put_display_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_display_value` <a name="put_display_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.putDisplayValue"></a>

```python
def put_display_value(
  default_text: str,
  localized_text: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText]] = None
) -> None
```

###### `default_text`<sup>Required</sup> <a name="default_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.putDisplayValue.parameter.defaultText"></a>

- *Type:* str

The default text of this question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#default_text AccessPackageAssignmentPolicy#default_text}

---

###### `localized_text`<sup>Optional</sup> <a name="localized_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.putDisplayValue.parameter.localizedText"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>]]

localized_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#localized_text AccessPackageAssignmentPolicy#localized_text}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.displayValue">display_value</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.actualValueInput">actual_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.displayValueInput">display_value_input</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue">AccessPackageAssignmentPolicyQuestionChoiceDisplayValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.actualValue">actual_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_value`<sup>Required</sup> <a name="display_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.displayValue"></a>

```python
display_value: AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference</a>

---

##### `actual_value_input`<sup>Optional</sup> <a name="actual_value_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.actualValueInput"></a>

```python
actual_value_input: str
```

- *Type:* str

---

##### `display_value_input`<sup>Optional</sup> <a name="display_value_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.displayValueInput"></a>

```python
display_value_input: AccessPackageAssignmentPolicyQuestionChoiceDisplayValue
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue">AccessPackageAssignmentPolicyQuestionChoiceDisplayValue</a>

---

##### `actual_value`<sup>Required</sup> <a name="actual_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.actualValue"></a>

```python
actual_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPackageAssignmentPolicyQuestionChoice]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>]

---


### AccessPackageAssignmentPolicyQuestionList <a name="AccessPackageAssignmentPolicyQuestionList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPackageAssignmentPolicyQuestionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>]]

---


### AccessPackageAssignmentPolicyQuestionOutputReference <a name="AccessPackageAssignmentPolicyQuestionOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.putChoice">put_choice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.putText">put_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resetChoice">reset_choice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resetSequence">reset_sequence</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_choice` <a name="put_choice" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.putChoice"></a>

```python
def put_choice(
  value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionChoice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.putChoice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>]]

---

##### `put_text` <a name="put_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.putText"></a>

```python
def put_text(
  default_text: str,
  localized_text: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionTextLocalizedText]] = None
) -> None
```

###### `default_text`<sup>Required</sup> <a name="default_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.putText.parameter.defaultText"></a>

- *Type:* str

The default text of this question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#default_text AccessPackageAssignmentPolicy#default_text}

---

###### `localized_text`<sup>Optional</sup> <a name="localized_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.putText.parameter.localizedText"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>]]

localized_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_assignment_policy#localized_text AccessPackageAssignmentPolicy#localized_text}

---

##### `reset_choice` <a name="reset_choice" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resetChoice"></a>

```python
def reset_choice() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_sequence` <a name="reset_sequence" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resetSequence"></a>

```python
def reset_sequence() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.choice">choice</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList">AccessPackageAssignmentPolicyQuestionChoiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference">AccessPackageAssignmentPolicyQuestionTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.choiceInput">choice_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.sequenceInput">sequence_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.textInput">text_input</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText">AccessPackageAssignmentPolicyQuestionText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.sequence">sequence</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `choice`<sup>Required</sup> <a name="choice" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.choice"></a>

```python
choice: AccessPackageAssignmentPolicyQuestionChoiceList
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList">AccessPackageAssignmentPolicyQuestionChoiceList</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.text"></a>

```python
text: AccessPackageAssignmentPolicyQuestionTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference">AccessPackageAssignmentPolicyQuestionTextOutputReference</a>

---

##### `choice_input`<sup>Optional</sup> <a name="choice_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.choiceInput"></a>

```python
choice_input: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionChoice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>]]

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sequence_input`<sup>Optional</sup> <a name="sequence_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.sequenceInput"></a>

```python
sequence_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.textInput"></a>

```python
text_input: AccessPackageAssignmentPolicyQuestionText
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText">AccessPackageAssignmentPolicyQuestionText</a>

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sequence`<sup>Required</sup> <a name="sequence" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.sequence"></a>

```python
sequence: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPackageAssignmentPolicyQuestion]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>]

---


### AccessPackageAssignmentPolicyQuestionTextLocalizedTextList <a name="AccessPackageAssignmentPolicyQuestionTextLocalizedTextList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionTextLocalizedText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>]]

---


### AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference <a name="AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPackageAssignmentPolicyQuestionTextLocalizedText]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>]

---


### AccessPackageAssignmentPolicyQuestionTextOutputReference <a name="AccessPackageAssignmentPolicyQuestionTextOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.putLocalizedText">put_localized_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.resetLocalizedText">reset_localized_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_localized_text` <a name="put_localized_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.putLocalizedText"></a>

```python
def put_localized_text(
  value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionTextLocalizedText]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.putLocalizedText.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>]]

---

##### `reset_localized_text` <a name="reset_localized_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.resetLocalizedText"></a>

```python
def reset_localized_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.localizedText">localized_text</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList">AccessPackageAssignmentPolicyQuestionTextLocalizedTextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.defaultTextInput">default_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.localizedTextInput">localized_text_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.defaultText">default_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText">AccessPackageAssignmentPolicyQuestionText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `localized_text`<sup>Required</sup> <a name="localized_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.localizedText"></a>

```python
localized_text: AccessPackageAssignmentPolicyQuestionTextLocalizedTextList
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList">AccessPackageAssignmentPolicyQuestionTextLocalizedTextList</a>

---

##### `default_text_input`<sup>Optional</sup> <a name="default_text_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.defaultTextInput"></a>

```python
default_text_input: str
```

- *Type:* str

---

##### `localized_text_input`<sup>Optional</sup> <a name="localized_text_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.localizedTextInput"></a>

```python
localized_text_input: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyQuestionTextLocalizedText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>]]

---

##### `default_text`<sup>Required</sup> <a name="default_text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.defaultText"></a>

```python
default_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.internalValue"></a>

```python
internal_value: AccessPackageAssignmentPolicyQuestionText
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText">AccessPackageAssignmentPolicyQuestionText</a>

---


### AccessPackageAssignmentPolicyRequestorSettingsOutputReference <a name="AccessPackageAssignmentPolicyRequestorSettingsOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.putRequestor">put_requestor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resetRequestor">reset_requestor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resetRequestsAccepted">reset_requests_accepted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resetScopeType">reset_scope_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_requestor` <a name="put_requestor" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.putRequestor"></a>

```python
def put_requestor(
  value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyRequestorSettingsRequestor]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.putRequestor.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>]]

---

##### `reset_requestor` <a name="reset_requestor" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resetRequestor"></a>

```python
def reset_requestor() -> None
```

##### `reset_requests_accepted` <a name="reset_requests_accepted" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resetRequestsAccepted"></a>

```python
def reset_requests_accepted() -> None
```

##### `reset_scope_type` <a name="reset_scope_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resetScopeType"></a>

```python
def reset_scope_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.requestor">requestor</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList">AccessPackageAssignmentPolicyRequestorSettingsRequestorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.requestorInput">requestor_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.requestsAcceptedInput">requests_accepted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.scopeTypeInput">scope_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.requestsAccepted">requests_accepted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.scopeType">scope_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `requestor`<sup>Required</sup> <a name="requestor" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.requestor"></a>

```python
requestor: AccessPackageAssignmentPolicyRequestorSettingsRequestorList
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList">AccessPackageAssignmentPolicyRequestorSettingsRequestorList</a>

---

##### `requestor_input`<sup>Optional</sup> <a name="requestor_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.requestorInput"></a>

```python
requestor_input: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyRequestorSettingsRequestor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>]]

---

##### `requests_accepted_input`<sup>Optional</sup> <a name="requests_accepted_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.requestsAcceptedInput"></a>

```python
requests_accepted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope_type_input`<sup>Optional</sup> <a name="scope_type_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.scopeTypeInput"></a>

```python
scope_type_input: str
```

- *Type:* str

---

##### `requests_accepted`<sup>Required</sup> <a name="requests_accepted" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.requestsAccepted"></a>

```python
requests_accepted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope_type`<sup>Required</sup> <a name="scope_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.scopeType"></a>

```python
scope_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.internalValue"></a>

```python
internal_value: AccessPackageAssignmentPolicyRequestorSettings
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a>

---


### AccessPackageAssignmentPolicyRequestorSettingsRequestorList <a name="AccessPackageAssignmentPolicyRequestorSettingsRequestorList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPackageAssignmentPolicyRequestorSettingsRequestor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>]]

---


### AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference <a name="AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.resetBackup">reset_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.resetObjectId">reset_object_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup` <a name="reset_backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.resetBackup"></a>

```python
def reset_backup() -> None
```

##### `reset_object_id` <a name="reset_object_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.resetObjectId"></a>

```python
def reset_object_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.backupInput">backup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.subjectTypeInput">subject_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.backup">backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.subjectType">subject_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_input`<sup>Optional</sup> <a name="backup_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.backupInput"></a>

```python
backup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `subject_type_input`<sup>Optional</sup> <a name="subject_type_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.subjectTypeInput"></a>

```python
subject_type_input: str
```

- *Type:* str

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.backup"></a>

```python
backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `subject_type`<sup>Required</sup> <a name="subject_type" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.subjectType"></a>

```python
subject_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPackageAssignmentPolicyRequestorSettingsRequestor]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>]

---


### AccessPackageAssignmentPolicyTimeoutsOutputReference <a name="AccessPackageAssignmentPolicyTimeoutsOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_assignment_policy

accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPackageAssignmentPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a>]

---



