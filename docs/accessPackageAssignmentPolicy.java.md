# `azuread_access_package_assignment_policy`

Refer to the Terraform Registory for docs: [`azuread_access_package_assignment_policy`](https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy).

# `accessPackageAssignmentPolicy` Submodule <a name="`accessPackageAssignmentPolicy` Submodule" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessPackageAssignmentPolicy <a name="AccessPackageAssignmentPolicy" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy azuread_access_package_assignment_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicy;

AccessPackageAssignmentPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accessPackageId(java.lang.String)
    .description(java.lang.String)
    .displayName(java.lang.String)
//  .approvalSettings(AccessPackageAssignmentPolicyApprovalSettings)
//  .assignmentReviewSettings(AccessPackageAssignmentPolicyAssignmentReviewSettings)
//  .durationInDays(java.lang.Number)
//  .expirationDate(java.lang.String)
//  .extensionEnabled(java.lang.Boolean)
//  .extensionEnabled(IResolvable)
//  .id(java.lang.String)
//  .question(IResolvable)
//  .question(java.util.List<AccessPackageAssignmentPolicyQuestion>)
//  .requestorSettings(AccessPackageAssignmentPolicyRequestorSettings)
//  .timeouts(AccessPackageAssignmentPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.accessPackageId">accessPackageId</a></code> | <code>java.lang.String</code> | The ID of the access package that will contain the policy. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the policy. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the policy. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.approvalSettings">approvalSettings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a></code> | approval_settings block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.assignmentReviewSettings">assignmentReviewSettings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a></code> | assignment_review_settings block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.durationInDays">durationInDays</a></code> | <code>java.lang.Number</code> | How many days this assignment is valid for. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z). |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.extensionEnabled">extensionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, users will be able to request extension of their access to this package before their access expires. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#id AccessPackageAssignmentPolicy#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.question">question</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>></code> | question block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.requestorSettings">requestorSettings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a></code> | requestor_settings block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessPackageId`<sup>Required</sup> <a name="accessPackageId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.accessPackageId"></a>

- *Type:* java.lang.String

The ID of the access package that will contain the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#access_package_id AccessPackageAssignmentPolicy#access_package_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#description AccessPackageAssignmentPolicy#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#display_name AccessPackageAssignmentPolicy#display_name}

---

##### `approvalSettings`<sup>Optional</sup> <a name="approvalSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.approvalSettings"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a>

approval_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#approval_settings AccessPackageAssignmentPolicy#approval_settings}

---

##### `assignmentReviewSettings`<sup>Optional</sup> <a name="assignmentReviewSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.assignmentReviewSettings"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a>

assignment_review_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#assignment_review_settings AccessPackageAssignmentPolicy#assignment_review_settings}

---

##### `durationInDays`<sup>Optional</sup> <a name="durationInDays" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.durationInDays"></a>

- *Type:* java.lang.Number

How many days this assignment is valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#duration_in_days AccessPackageAssignmentPolicy#duration_in_days}

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.expirationDate"></a>

- *Type:* java.lang.String

The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#expiration_date AccessPackageAssignmentPolicy#expiration_date}

---

##### `extensionEnabled`<sup>Optional</sup> <a name="extensionEnabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.extensionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, users will be able to request extension of their access to this package before their access expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#extension_enabled AccessPackageAssignmentPolicy#extension_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#id AccessPackageAssignmentPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Optional</sup> <a name="question" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.question"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>>

question block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#question AccessPackageAssignmentPolicy#question}

---

##### `requestorSettings`<sup>Optional</sup> <a name="requestorSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.requestorSettings"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a>

requestor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#requestor_settings AccessPackageAssignmentPolicy#requestor_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#timeouts AccessPackageAssignmentPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putApprovalSettings">putApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putAssignmentReviewSettings">putAssignmentReviewSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putQuestion">putQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putRequestorSettings">putRequestorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetApprovalSettings">resetApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetAssignmentReviewSettings">resetAssignmentReviewSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetDurationInDays">resetDurationInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetExpirationDate">resetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetExtensionEnabled">resetExtensionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetQuestion">resetQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetRequestorSettings">resetRequestorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putApprovalSettings` <a name="putApprovalSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putApprovalSettings"></a>

```java
public void putApprovalSettings(AccessPackageAssignmentPolicyApprovalSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putApprovalSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a>

---

##### `putAssignmentReviewSettings` <a name="putAssignmentReviewSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putAssignmentReviewSettings"></a>

```java
public void putAssignmentReviewSettings(AccessPackageAssignmentPolicyAssignmentReviewSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putAssignmentReviewSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a>

---

##### `putQuestion` <a name="putQuestion" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putQuestion"></a>

```java
public void putQuestion(IResolvable OR java.util.List<AccessPackageAssignmentPolicyQuestion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putQuestion.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>>

---

##### `putRequestorSettings` <a name="putRequestorSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putRequestorSettings"></a>

```java
public void putRequestorSettings(AccessPackageAssignmentPolicyRequestorSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putRequestorSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putTimeouts"></a>

```java
public void putTimeouts(AccessPackageAssignmentPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a>

---

##### `resetApprovalSettings` <a name="resetApprovalSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetApprovalSettings"></a>

```java
public void resetApprovalSettings()
```

##### `resetAssignmentReviewSettings` <a name="resetAssignmentReviewSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetAssignmentReviewSettings"></a>

```java
public void resetAssignmentReviewSettings()
```

##### `resetDurationInDays` <a name="resetDurationInDays" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetDurationInDays"></a>

```java
public void resetDurationInDays()
```

##### `resetExpirationDate` <a name="resetExpirationDate" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetExpirationDate"></a>

```java
public void resetExpirationDate()
```

##### `resetExtensionEnabled` <a name="resetExtensionEnabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetExtensionEnabled"></a>

```java
public void resetExtensionEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetQuestion` <a name="resetQuestion" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetQuestion"></a>

```java
public void resetQuestion()
```

##### `resetRequestorSettings` <a name="resetRequestorSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetRequestorSettings"></a>

```java
public void resetRequestorSettings()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicy;

AccessPackageAssignmentPolicy.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicy;

AccessPackageAssignmentPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicy;

AccessPackageAssignmentPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.approvalSettings">approvalSettings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference">AccessPackageAssignmentPolicyApprovalSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.assignmentReviewSettings">assignmentReviewSettings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference">AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.question">question</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList">AccessPackageAssignmentPolicyQuestionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.requestorSettings">requestorSettings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference">AccessPackageAssignmentPolicyRequestorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference">AccessPackageAssignmentPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.accessPackageIdInput">accessPackageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.approvalSettingsInput">approvalSettingsInput</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.assignmentReviewSettingsInput">assignmentReviewSettingsInput</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.durationInDaysInput">durationInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.expirationDateInput">expirationDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.extensionEnabledInput">extensionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.questionInput">questionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.requestorSettingsInput">requestorSettingsInput</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.accessPackageId">accessPackageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.durationInDays">durationInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.extensionEnabled">extensionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approvalSettings`<sup>Required</sup> <a name="approvalSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.approvalSettings"></a>

```java
public AccessPackageAssignmentPolicyApprovalSettingsOutputReference getApprovalSettings();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference">AccessPackageAssignmentPolicyApprovalSettingsOutputReference</a>

---

##### `assignmentReviewSettings`<sup>Required</sup> <a name="assignmentReviewSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.assignmentReviewSettings"></a>

```java
public AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference getAssignmentReviewSettings();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference">AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference</a>

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.question"></a>

```java
public AccessPackageAssignmentPolicyQuestionList getQuestion();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList">AccessPackageAssignmentPolicyQuestionList</a>

---

##### `requestorSettings`<sup>Required</sup> <a name="requestorSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.requestorSettings"></a>

```java
public AccessPackageAssignmentPolicyRequestorSettingsOutputReference getRequestorSettings();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference">AccessPackageAssignmentPolicyRequestorSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.timeouts"></a>

```java
public AccessPackageAssignmentPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference">AccessPackageAssignmentPolicyTimeoutsOutputReference</a>

---

##### `accessPackageIdInput`<sup>Optional</sup> <a name="accessPackageIdInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.accessPackageIdInput"></a>

```java
public java.lang.String getAccessPackageIdInput();
```

- *Type:* java.lang.String

---

##### `approvalSettingsInput`<sup>Optional</sup> <a name="approvalSettingsInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.approvalSettingsInput"></a>

```java
public AccessPackageAssignmentPolicyApprovalSettings getApprovalSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a>

---

##### `assignmentReviewSettingsInput`<sup>Optional</sup> <a name="assignmentReviewSettingsInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.assignmentReviewSettingsInput"></a>

```java
public AccessPackageAssignmentPolicyAssignmentReviewSettings getAssignmentReviewSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `durationInDaysInput`<sup>Optional</sup> <a name="durationInDaysInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.durationInDaysInput"></a>

```java
public java.lang.Number getDurationInDaysInput();
```

- *Type:* java.lang.Number

---

##### `expirationDateInput`<sup>Optional</sup> <a name="expirationDateInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.expirationDateInput"></a>

```java
public java.lang.String getExpirationDateInput();
```

- *Type:* java.lang.String

---

##### `extensionEnabledInput`<sup>Optional</sup> <a name="extensionEnabledInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.extensionEnabledInput"></a>

```java
public java.lang.Object getExtensionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `questionInput`<sup>Optional</sup> <a name="questionInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.questionInput"></a>

```java
public java.lang.Object getQuestionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>>

---

##### `requestorSettingsInput`<sup>Optional</sup> <a name="requestorSettingsInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.requestorSettingsInput"></a>

```java
public AccessPackageAssignmentPolicyRequestorSettings getRequestorSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a>

---

##### `accessPackageId`<sup>Required</sup> <a name="accessPackageId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.accessPackageId"></a>

```java
public java.lang.String getAccessPackageId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `durationInDays`<sup>Required</sup> <a name="durationInDays" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.durationInDays"></a>

```java
public java.lang.Number getDurationInDays();
```

- *Type:* java.lang.Number

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

---

##### `extensionEnabled`<sup>Required</sup> <a name="extensionEnabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.extensionEnabled"></a>

```java
public java.lang.Object getExtensionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessPackageAssignmentPolicyApprovalSettings <a name="AccessPackageAssignmentPolicyApprovalSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyApprovalSettings;

AccessPackageAssignmentPolicyApprovalSettings.builder()
//  .approvalRequired(java.lang.Boolean)
//  .approvalRequired(IResolvable)
//  .approvalRequiredForExtension(java.lang.Boolean)
//  .approvalRequiredForExtension(IResolvable)
//  .approvalStage(IResolvable)
//  .approvalStage(java.util.List<AccessPackageAssignmentPolicyApprovalSettingsApprovalStage>)
//  .requestorJustificationRequired(java.lang.Boolean)
//  .requestorJustificationRequired(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.property.approvalRequired">approvalRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether an approval is required. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.property.approvalRequiredForExtension">approvalRequiredForExtension</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether an approval is required to grant extension. Same approval settings used to approve initial access will apply. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.property.approvalStage">approvalStage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>></code> | approval_stage block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.property.requestorJustificationRequired">requestorJustificationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether requestor are required to provide a justification to request an access package. |

---

##### `approvalRequired`<sup>Optional</sup> <a name="approvalRequired" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.property.approvalRequired"></a>

```java
public java.lang.Object getApprovalRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether an approval is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#approval_required AccessPackageAssignmentPolicy#approval_required}

---

##### `approvalRequiredForExtension`<sup>Optional</sup> <a name="approvalRequiredForExtension" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.property.approvalRequiredForExtension"></a>

```java
public java.lang.Object getApprovalRequiredForExtension();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether an approval is required to grant extension. Same approval settings used to approve initial access will apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#approval_required_for_extension AccessPackageAssignmentPolicy#approval_required_for_extension}

---

##### `approvalStage`<sup>Optional</sup> <a name="approvalStage" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.property.approvalStage"></a>

```java
public java.lang.Object getApprovalStage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>>

approval_stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#approval_stage AccessPackageAssignmentPolicy#approval_stage}

---

##### `requestorJustificationRequired`<sup>Optional</sup> <a name="requestorJustificationRequired" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings.property.requestorJustificationRequired"></a>

```java
public java.lang.Object getRequestorJustificationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether requestor are required to provide a justification to request an access package.

Justification is visible to other approvers and the requestor

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#requestor_justification_required AccessPackageAssignmentPolicy#requestor_justification_required}

---

### AccessPackageAssignmentPolicyApprovalSettingsApprovalStage <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStage" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage;

AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.builder()
    .approvalTimeoutInDays(java.lang.Number)
//  .alternativeApprovalEnabled(java.lang.Boolean)
//  .alternativeApprovalEnabled(IResolvable)
//  .alternativeApprover(IResolvable)
//  .alternativeApprover(java.util.List<AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover>)
//  .approverJustificationRequired(java.lang.Boolean)
//  .approverJustificationRequired(IResolvable)
//  .enableAlternativeApprovalInDays(java.lang.Number)
//  .primaryApprover(IResolvable)
//  .primaryApprover(java.util.List<AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.approvalTimeoutInDays">approvalTimeoutInDays</a></code> | <code>java.lang.Number</code> | Decision must be made in how many days? |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.alternativeApprovalEnabled">alternativeApprovalEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If no action taken, forward to alternate approvers? |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.alternativeApprover">alternativeApprover</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>></code> | alternative_approver block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.approverJustificationRequired">approverJustificationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether an approver must provide a justification for their decision. Justification is visible to other approvers and the requestor. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.enableAlternativeApprovalInDays">enableAlternativeApprovalInDays</a></code> | <code>java.lang.Number</code> | Forward to alternate approver(s) after how many days? |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.primaryApprover">primaryApprover</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>></code> | primary_approver block. |

---

##### `approvalTimeoutInDays`<sup>Required</sup> <a name="approvalTimeoutInDays" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.approvalTimeoutInDays"></a>

```java
public java.lang.Number getApprovalTimeoutInDays();
```

- *Type:* java.lang.Number

Decision must be made in how many days?

If a request is not approved within this time period after it is made, it will be automatically rejected

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#approval_timeout_in_days AccessPackageAssignmentPolicy#approval_timeout_in_days}

---

##### `alternativeApprovalEnabled`<sup>Optional</sup> <a name="alternativeApprovalEnabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.alternativeApprovalEnabled"></a>

```java
public java.lang.Object getAlternativeApprovalEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If no action taken, forward to alternate approvers?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#alternative_approval_enabled AccessPackageAssignmentPolicy#alternative_approval_enabled}

---

##### `alternativeApprover`<sup>Optional</sup> <a name="alternativeApprover" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.alternativeApprover"></a>

```java
public java.lang.Object getAlternativeApprover();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>>

alternative_approver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#alternative_approver AccessPackageAssignmentPolicy#alternative_approver}

---

##### `approverJustificationRequired`<sup>Optional</sup> <a name="approverJustificationRequired" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.approverJustificationRequired"></a>

```java
public java.lang.Object getApproverJustificationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether an approver must provide a justification for their decision. Justification is visible to other approvers and the requestor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#approver_justification_required AccessPackageAssignmentPolicy#approver_justification_required}

---

##### `enableAlternativeApprovalInDays`<sup>Optional</sup> <a name="enableAlternativeApprovalInDays" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.enableAlternativeApprovalInDays"></a>

```java
public java.lang.Number getEnableAlternativeApprovalInDays();
```

- *Type:* java.lang.Number

Forward to alternate approver(s) after how many days?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#enable_alternative_approval_in_days AccessPackageAssignmentPolicy#enable_alternative_approval_in_days}

---

##### `primaryApprover`<sup>Optional</sup> <a name="primaryApprover" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage.property.primaryApprover"></a>

```java
public java.lang.Object getPrimaryApprover();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>>

primary_approver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#primary_approver AccessPackageAssignmentPolicy#primary_approver}

---

### AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover;

AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover.builder()
    .subjectType(java.lang.String)
//  .backup(java.lang.Boolean)
//  .backup(IResolvable)
//  .objectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover.property.subjectType">subjectType</a></code> | <code>java.lang.String</code> | Type of users. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover.property.backup">backup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | For a user in an approval stage, this property indicates whether the user is a backup fallback approver. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover.property.objectId">objectId</a></code> | <code>java.lang.String</code> | The object ID of the subject. |

---

##### `subjectType`<sup>Required</sup> <a name="subjectType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover.property.subjectType"></a>

```java
public java.lang.String getSubjectType();
```

- *Type:* java.lang.String

Type of users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#subject_type AccessPackageAssignmentPolicy#subject_type}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover.property.backup"></a>

```java
public java.lang.Object getBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

For a user in an approval stage, this property indicates whether the user is a backup fallback approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#backup AccessPackageAssignmentPolicy#backup}

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

The object ID of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#object_id AccessPackageAssignmentPolicy#object_id}

---

### AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover;

AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover.builder()
    .subjectType(java.lang.String)
//  .backup(java.lang.Boolean)
//  .backup(IResolvable)
//  .objectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover.property.subjectType">subjectType</a></code> | <code>java.lang.String</code> | Type of users. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover.property.backup">backup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | For a user in an approval stage, this property indicates whether the user is a backup fallback approver. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover.property.objectId">objectId</a></code> | <code>java.lang.String</code> | The object ID of the subject. |

---

##### `subjectType`<sup>Required</sup> <a name="subjectType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover.property.subjectType"></a>

```java
public java.lang.String getSubjectType();
```

- *Type:* java.lang.String

Type of users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#subject_type AccessPackageAssignmentPolicy#subject_type}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover.property.backup"></a>

```java
public java.lang.Object getBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

For a user in an approval stage, this property indicates whether the user is a backup fallback approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#backup AccessPackageAssignmentPolicy#backup}

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

The object ID of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#object_id AccessPackageAssignmentPolicy#object_id}

---

### AccessPackageAssignmentPolicyAssignmentReviewSettings <a name="AccessPackageAssignmentPolicyAssignmentReviewSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyAssignmentReviewSettings;

AccessPackageAssignmentPolicyAssignmentReviewSettings.builder()
//  .accessRecommendationEnabled(java.lang.Boolean)
//  .accessRecommendationEnabled(IResolvable)
//  .accessReviewTimeoutBehavior(java.lang.String)
//  .approverJustificationRequired(java.lang.Boolean)
//  .approverJustificationRequired(IResolvable)
//  .durationInDays(java.lang.Number)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .reviewer(IResolvable)
//  .reviewer(java.util.List<AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer>)
//  .reviewFrequency(java.lang.String)
//  .reviewType(java.lang.String)
//  .startingOn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.accessRecommendationEnabled">accessRecommendationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to show Show reviewer decision helpers. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.accessReviewTimeoutBehavior">accessReviewTimeoutBehavior</a></code> | <code>java.lang.String</code> | What actions the system takes if reviewers don't respond in time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.approverJustificationRequired">approverJustificationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether a reviewer need provide a justification for their decision. Justification is visible to other reviewers and the requestor. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.durationInDays">durationInDays</a></code> | <code>java.lang.Number</code> | How many days each occurrence of the access review series will run. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable assignment review. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.reviewer">reviewer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>></code> | reviewer block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.reviewFrequency">reviewFrequency</a></code> | <code>java.lang.String</code> | This will determine how often the access review campaign runs. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.reviewType">reviewType</a></code> | <code>java.lang.String</code> | Self review or specific reviewers. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.startingOn">startingOn</a></code> | <code>java.lang.String</code> | This is the date the access review campaign will start on, formatted as an RFC3339 date string in UTC(e.g. 2018-01-01T01:02:03Z), default is now. Once an access review has been created, you cannot update its start date. |

---

##### `accessRecommendationEnabled`<sup>Optional</sup> <a name="accessRecommendationEnabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.accessRecommendationEnabled"></a>

```java
public java.lang.Object getAccessRecommendationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to show Show reviewer decision helpers.

If enabled, system recommendations based on users' access information will be shown to the reviewers. The reviewer will be recommended to approve the review if the user has signed-in at least once during the last 30 days. The reviewer will be recommended to deny the review if the user has not signed-in during the last 30 days

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#access_recommendation_enabled AccessPackageAssignmentPolicy#access_recommendation_enabled}

---

##### `accessReviewTimeoutBehavior`<sup>Optional</sup> <a name="accessReviewTimeoutBehavior" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.accessReviewTimeoutBehavior"></a>

```java
public java.lang.String getAccessReviewTimeoutBehavior();
```

- *Type:* java.lang.String

What actions the system takes if reviewers don't respond in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#access_review_timeout_behavior AccessPackageAssignmentPolicy#access_review_timeout_behavior}

---

##### `approverJustificationRequired`<sup>Optional</sup> <a name="approverJustificationRequired" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.approverJustificationRequired"></a>

```java
public java.lang.Object getApproverJustificationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether a reviewer need provide a justification for their decision. Justification is visible to other reviewers and the requestor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#approver_justification_required AccessPackageAssignmentPolicy#approver_justification_required}

---

##### `durationInDays`<sup>Optional</sup> <a name="durationInDays" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.durationInDays"></a>

```java
public java.lang.Number getDurationInDays();
```

- *Type:* java.lang.Number

How many days each occurrence of the access review series will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#duration_in_days AccessPackageAssignmentPolicy#duration_in_days}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable assignment review.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#enabled AccessPackageAssignmentPolicy#enabled}

---

##### `reviewer`<sup>Optional</sup> <a name="reviewer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.reviewer"></a>

```java
public java.lang.Object getReviewer();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>>

reviewer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#reviewer AccessPackageAssignmentPolicy#reviewer}

---

##### `reviewFrequency`<sup>Optional</sup> <a name="reviewFrequency" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.reviewFrequency"></a>

```java
public java.lang.String getReviewFrequency();
```

- *Type:* java.lang.String

This will determine how often the access review campaign runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#review_frequency AccessPackageAssignmentPolicy#review_frequency}

---

##### `reviewType`<sup>Optional</sup> <a name="reviewType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.reviewType"></a>

```java
public java.lang.String getReviewType();
```

- *Type:* java.lang.String

Self review or specific reviewers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#review_type AccessPackageAssignmentPolicy#review_type}

---

##### `startingOn`<sup>Optional</sup> <a name="startingOn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings.property.startingOn"></a>

```java
public java.lang.String getStartingOn();
```

- *Type:* java.lang.String

This is the date the access review campaign will start on, formatted as an RFC3339 date string in UTC(e.g. 2018-01-01T01:02:03Z), default is now. Once an access review has been created, you cannot update its start date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#starting_on AccessPackageAssignmentPolicy#starting_on}

---

### AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer <a name="AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer;

AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer.builder()
    .subjectType(java.lang.String)
//  .backup(java.lang.Boolean)
//  .backup(IResolvable)
//  .objectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer.property.subjectType">subjectType</a></code> | <code>java.lang.String</code> | Type of users. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer.property.backup">backup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | For a user in an approval stage, this property indicates whether the user is a backup fallback approver. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer.property.objectId">objectId</a></code> | <code>java.lang.String</code> | The object ID of the subject. |

---

##### `subjectType`<sup>Required</sup> <a name="subjectType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer.property.subjectType"></a>

```java
public java.lang.String getSubjectType();
```

- *Type:* java.lang.String

Type of users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#subject_type AccessPackageAssignmentPolicy#subject_type}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer.property.backup"></a>

```java
public java.lang.Object getBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

For a user in an approval stage, this property indicates whether the user is a backup fallback approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#backup AccessPackageAssignmentPolicy#backup}

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

The object ID of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#object_id AccessPackageAssignmentPolicy#object_id}

---

### AccessPackageAssignmentPolicyConfig <a name="AccessPackageAssignmentPolicyConfig" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyConfig;

AccessPackageAssignmentPolicyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accessPackageId(java.lang.String)
    .description(java.lang.String)
    .displayName(java.lang.String)
//  .approvalSettings(AccessPackageAssignmentPolicyApprovalSettings)
//  .assignmentReviewSettings(AccessPackageAssignmentPolicyAssignmentReviewSettings)
//  .durationInDays(java.lang.Number)
//  .expirationDate(java.lang.String)
//  .extensionEnabled(java.lang.Boolean)
//  .extensionEnabled(IResolvable)
//  .id(java.lang.String)
//  .question(IResolvable)
//  .question(java.util.List<AccessPackageAssignmentPolicyQuestion>)
//  .requestorSettings(AccessPackageAssignmentPolicyRequestorSettings)
//  .timeouts(AccessPackageAssignmentPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.accessPackageId">accessPackageId</a></code> | <code>java.lang.String</code> | The ID of the access package that will contain the policy. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the policy. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the policy. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.approvalSettings">approvalSettings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a></code> | approval_settings block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.assignmentReviewSettings">assignmentReviewSettings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a></code> | assignment_review_settings block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.durationInDays">durationInDays</a></code> | <code>java.lang.Number</code> | How many days this assignment is valid for. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z). |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.extensionEnabled">extensionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, users will be able to request extension of their access to this package before their access expires. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#id AccessPackageAssignmentPolicy#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.question">question</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>></code> | question block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.requestorSettings">requestorSettings</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a></code> | requestor_settings block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessPackageId`<sup>Required</sup> <a name="accessPackageId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.accessPackageId"></a>

```java
public java.lang.String getAccessPackageId();
```

- *Type:* java.lang.String

The ID of the access package that will contain the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#access_package_id AccessPackageAssignmentPolicy#access_package_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#description AccessPackageAssignmentPolicy#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#display_name AccessPackageAssignmentPolicy#display_name}

---

##### `approvalSettings`<sup>Optional</sup> <a name="approvalSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.approvalSettings"></a>

```java
public AccessPackageAssignmentPolicyApprovalSettings getApprovalSettings();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a>

approval_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#approval_settings AccessPackageAssignmentPolicy#approval_settings}

---

##### `assignmentReviewSettings`<sup>Optional</sup> <a name="assignmentReviewSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.assignmentReviewSettings"></a>

```java
public AccessPackageAssignmentPolicyAssignmentReviewSettings getAssignmentReviewSettings();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a>

assignment_review_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#assignment_review_settings AccessPackageAssignmentPolicy#assignment_review_settings}

---

##### `durationInDays`<sup>Optional</sup> <a name="durationInDays" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.durationInDays"></a>

```java
public java.lang.Number getDurationInDays();
```

- *Type:* java.lang.Number

How many days this assignment is valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#duration_in_days AccessPackageAssignmentPolicy#duration_in_days}

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#expiration_date AccessPackageAssignmentPolicy#expiration_date}

---

##### `extensionEnabled`<sup>Optional</sup> <a name="extensionEnabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.extensionEnabled"></a>

```java
public java.lang.Object getExtensionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, users will be able to request extension of their access to this package before their access expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#extension_enabled AccessPackageAssignmentPolicy#extension_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#id AccessPackageAssignmentPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Optional</sup> <a name="question" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.question"></a>

```java
public java.lang.Object getQuestion();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>>

question block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#question AccessPackageAssignmentPolicy#question}

---

##### `requestorSettings`<sup>Optional</sup> <a name="requestorSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.requestorSettings"></a>

```java
public AccessPackageAssignmentPolicyRequestorSettings getRequestorSettings();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a>

requestor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#requestor_settings AccessPackageAssignmentPolicy#requestor_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyConfig.property.timeouts"></a>

```java
public AccessPackageAssignmentPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#timeouts AccessPackageAssignmentPolicy#timeouts}

---

### AccessPackageAssignmentPolicyQuestion <a name="AccessPackageAssignmentPolicyQuestion" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyQuestion;

AccessPackageAssignmentPolicyQuestion.builder()
    .text(AccessPackageAssignmentPolicyQuestionText)
//  .choice(IResolvable)
//  .choice(java.util.List<AccessPackageAssignmentPolicyQuestionChoice>)
//  .required(java.lang.Boolean)
//  .required(IResolvable)
//  .sequence(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.property.text">text</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText">AccessPackageAssignmentPolicyQuestionText</a></code> | text block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.property.choice">choice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>></code> | choice block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this question is required. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.property.sequence">sequence</a></code> | <code>java.lang.Number</code> | The sequence number of this question. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.property.text"></a>

```java
public AccessPackageAssignmentPolicyQuestionText getText();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText">AccessPackageAssignmentPolicyQuestionText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#text AccessPackageAssignmentPolicy#text}

---

##### `choice`<sup>Optional</sup> <a name="choice" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.property.choice"></a>

```java
public java.lang.Object getChoice();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>>

choice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#choice AccessPackageAssignmentPolicy#choice}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this question is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#required AccessPackageAssignmentPolicy#required}

---

##### `sequence`<sup>Optional</sup> <a name="sequence" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion.property.sequence"></a>

```java
public java.lang.Number getSequence();
```

- *Type:* java.lang.Number

The sequence number of this question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#sequence AccessPackageAssignmentPolicy#sequence}

---

### AccessPackageAssignmentPolicyQuestionChoice <a name="AccessPackageAssignmentPolicyQuestionChoice" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyQuestionChoice;

AccessPackageAssignmentPolicyQuestionChoice.builder()
    .actualValue(java.lang.String)
    .displayValue(AccessPackageAssignmentPolicyQuestionChoiceDisplayValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice.property.actualValue">actualValue</a></code> | <code>java.lang.String</code> | The actual value of this choice. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice.property.displayValue">displayValue</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue">AccessPackageAssignmentPolicyQuestionChoiceDisplayValue</a></code> | display_value block. |

---

##### `actualValue`<sup>Required</sup> <a name="actualValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice.property.actualValue"></a>

```java
public java.lang.String getActualValue();
```

- *Type:* java.lang.String

The actual value of this choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#actual_value AccessPackageAssignmentPolicy#actual_value}

---

##### `displayValue`<sup>Required</sup> <a name="displayValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice.property.displayValue"></a>

```java
public AccessPackageAssignmentPolicyQuestionChoiceDisplayValue getDisplayValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue">AccessPackageAssignmentPolicyQuestionChoiceDisplayValue</a>

display_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#display_value AccessPackageAssignmentPolicy#display_value}

---

### AccessPackageAssignmentPolicyQuestionChoiceDisplayValue <a name="AccessPackageAssignmentPolicyQuestionChoiceDisplayValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue;

AccessPackageAssignmentPolicyQuestionChoiceDisplayValue.builder()
    .defaultText(java.lang.String)
//  .localizedText(IResolvable)
//  .localizedText(java.util.List<AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue.property.defaultText">defaultText</a></code> | <code>java.lang.String</code> | The default text of this question. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue.property.localizedText">localizedText</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>></code> | localized_text block. |

---

##### `defaultText`<sup>Required</sup> <a name="defaultText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue.property.defaultText"></a>

```java
public java.lang.String getDefaultText();
```

- *Type:* java.lang.String

The default text of this question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#default_text AccessPackageAssignmentPolicy#default_text}

---

##### `localizedText`<sup>Optional</sup> <a name="localizedText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue.property.localizedText"></a>

```java
public java.lang.Object getLocalizedText();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>>

localized_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#localized_text AccessPackageAssignmentPolicy#localized_text}

---

### AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText <a name="AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText;

AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText.builder()
    .content(java.lang.String)
    .languageCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText.property.content">content</a></code> | <code>java.lang.String</code> | The localized content of this question. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language code of this question content. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The localized content of this question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#content AccessPackageAssignmentPolicy#content}

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

The language code of this question content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#language_code AccessPackageAssignmentPolicy#language_code}

---

### AccessPackageAssignmentPolicyQuestionText <a name="AccessPackageAssignmentPolicyQuestionText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyQuestionText;

AccessPackageAssignmentPolicyQuestionText.builder()
    .defaultText(java.lang.String)
//  .localizedText(IResolvable)
//  .localizedText(java.util.List<AccessPackageAssignmentPolicyQuestionTextLocalizedText>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText.property.defaultText">defaultText</a></code> | <code>java.lang.String</code> | The default text of this question. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText.property.localizedText">localizedText</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>></code> | localized_text block. |

---

##### `defaultText`<sup>Required</sup> <a name="defaultText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText.property.defaultText"></a>

```java
public java.lang.String getDefaultText();
```

- *Type:* java.lang.String

The default text of this question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#default_text AccessPackageAssignmentPolicy#default_text}

---

##### `localizedText`<sup>Optional</sup> <a name="localizedText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText.property.localizedText"></a>

```java
public java.lang.Object getLocalizedText();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>>

localized_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#localized_text AccessPackageAssignmentPolicy#localized_text}

---

### AccessPackageAssignmentPolicyQuestionTextLocalizedText <a name="AccessPackageAssignmentPolicyQuestionTextLocalizedText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyQuestionTextLocalizedText;

AccessPackageAssignmentPolicyQuestionTextLocalizedText.builder()
    .content(java.lang.String)
    .languageCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText.property.content">content</a></code> | <code>java.lang.String</code> | The localized content of this question. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language code of this question content. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The localized content of this question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#content AccessPackageAssignmentPolicy#content}

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

The language code of this question content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#language_code AccessPackageAssignmentPolicy#language_code}

---

### AccessPackageAssignmentPolicyRequestorSettings <a name="AccessPackageAssignmentPolicyRequestorSettings" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyRequestorSettings;

AccessPackageAssignmentPolicyRequestorSettings.builder()
//  .requestor(IResolvable)
//  .requestor(java.util.List<AccessPackageAssignmentPolicyRequestorSettingsRequestor>)
//  .requestsAccepted(java.lang.Boolean)
//  .requestsAccepted(IResolvable)
//  .scopeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings.property.requestor">requestor</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>></code> | requestor block. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings.property.requestsAccepted">requestsAccepted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to accept requests now, when disabled, no new requests can be made using this policy. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings.property.scopeType">scopeType</a></code> | <code>java.lang.String</code> | Specify the scopes of the requestors. |

---

##### `requestor`<sup>Optional</sup> <a name="requestor" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings.property.requestor"></a>

```java
public java.lang.Object getRequestor();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>>

requestor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#requestor AccessPackageAssignmentPolicy#requestor}

---

##### `requestsAccepted`<sup>Optional</sup> <a name="requestsAccepted" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings.property.requestsAccepted"></a>

```java
public java.lang.Object getRequestsAccepted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to accept requests now, when disabled, no new requests can be made using this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#requests_accepted AccessPackageAssignmentPolicy#requests_accepted}

---

##### `scopeType`<sup>Optional</sup> <a name="scopeType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings.property.scopeType"></a>

```java
public java.lang.String getScopeType();
```

- *Type:* java.lang.String

Specify the scopes of the requestors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#scope_type AccessPackageAssignmentPolicy#scope_type}

---

### AccessPackageAssignmentPolicyRequestorSettingsRequestor <a name="AccessPackageAssignmentPolicyRequestorSettingsRequestor" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyRequestorSettingsRequestor;

AccessPackageAssignmentPolicyRequestorSettingsRequestor.builder()
    .subjectType(java.lang.String)
//  .backup(java.lang.Boolean)
//  .backup(IResolvable)
//  .objectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor.property.subjectType">subjectType</a></code> | <code>java.lang.String</code> | Type of users. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor.property.backup">backup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | For a user in an approval stage, this property indicates whether the user is a backup fallback approver. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor.property.objectId">objectId</a></code> | <code>java.lang.String</code> | The object ID of the subject. |

---

##### `subjectType`<sup>Required</sup> <a name="subjectType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor.property.subjectType"></a>

```java
public java.lang.String getSubjectType();
```

- *Type:* java.lang.String

Type of users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#subject_type AccessPackageAssignmentPolicy#subject_type}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor.property.backup"></a>

```java
public java.lang.Object getBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

For a user in an approval stage, this property indicates whether the user is a backup fallback approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#backup AccessPackageAssignmentPolicy#backup}

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

The object ID of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#object_id AccessPackageAssignmentPolicy#object_id}

---

### AccessPackageAssignmentPolicyTimeouts <a name="AccessPackageAssignmentPolicyTimeouts" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyTimeouts;

AccessPackageAssignmentPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#create AccessPackageAssignmentPolicy#create}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#delete AccessPackageAssignmentPolicy#delete}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#read AccessPackageAssignmentPolicy#read}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#update AccessPackageAssignmentPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#create AccessPackageAssignmentPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#delete AccessPackageAssignmentPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#read AccessPackageAssignmentPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_assignment_policy#update AccessPackageAssignmentPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList;

new AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.get"></a>

```java
public AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>>

---


### AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference;

new AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.resetBackup">resetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.resetObjectId">resetObjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackup` <a name="resetBackup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.resetBackup"></a>

```java
public void resetBackup()
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.resetObjectId"></a>

```java
public void resetObjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.backupInput">backupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.subjectTypeInput">subjectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.backup">backup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.subjectType">subjectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.backupInput"></a>

```java
public java.lang.Object getBackupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `subjectTypeInput`<sup>Optional</sup> <a name="subjectTypeInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.subjectTypeInput"></a>

```java
public java.lang.String getSubjectTypeInput();
```

- *Type:* java.lang.String

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.backup"></a>

```java
public java.lang.Object getBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `subjectType`<sup>Required</sup> <a name="subjectType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.subjectType"></a>

```java
public java.lang.String getSubjectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>

---


### AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList;

new AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.get"></a>

```java
public AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>>

---


### AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference;

new AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.putAlternativeApprover">putAlternativeApprover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.putPrimaryApprover">putPrimaryApprover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetAlternativeApprovalEnabled">resetAlternativeApprovalEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetAlternativeApprover">resetAlternativeApprover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetApproverJustificationRequired">resetApproverJustificationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetEnableAlternativeApprovalInDays">resetEnableAlternativeApprovalInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetPrimaryApprover">resetPrimaryApprover</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlternativeApprover` <a name="putAlternativeApprover" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.putAlternativeApprover"></a>

```java
public void putAlternativeApprover(IResolvable OR java.util.List<AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.putAlternativeApprover.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>>

---

##### `putPrimaryApprover` <a name="putPrimaryApprover" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.putPrimaryApprover"></a>

```java
public void putPrimaryApprover(IResolvable OR java.util.List<AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.putPrimaryApprover.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>>

---

##### `resetAlternativeApprovalEnabled` <a name="resetAlternativeApprovalEnabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetAlternativeApprovalEnabled"></a>

```java
public void resetAlternativeApprovalEnabled()
```

##### `resetAlternativeApprover` <a name="resetAlternativeApprover" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetAlternativeApprover"></a>

```java
public void resetAlternativeApprover()
```

##### `resetApproverJustificationRequired` <a name="resetApproverJustificationRequired" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetApproverJustificationRequired"></a>

```java
public void resetApproverJustificationRequired()
```

##### `resetEnableAlternativeApprovalInDays` <a name="resetEnableAlternativeApprovalInDays" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetEnableAlternativeApprovalInDays"></a>

```java
public void resetEnableAlternativeApprovalInDays()
```

##### `resetPrimaryApprover` <a name="resetPrimaryApprover" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.resetPrimaryApprover"></a>

```java
public void resetPrimaryApprover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.alternativeApprover">alternativeApprover</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.primaryApprover">primaryApprover</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.alternativeApprovalEnabledInput">alternativeApprovalEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.alternativeApproverInput">alternativeApproverInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.approvalTimeoutInDaysInput">approvalTimeoutInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.approverJustificationRequiredInput">approverJustificationRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.enableAlternativeApprovalInDaysInput">enableAlternativeApprovalInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.primaryApproverInput">primaryApproverInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.alternativeApprovalEnabled">alternativeApprovalEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.approvalTimeoutInDays">approvalTimeoutInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.approverJustificationRequired">approverJustificationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.enableAlternativeApprovalInDays">enableAlternativeApprovalInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alternativeApprover`<sup>Required</sup> <a name="alternativeApprover" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.alternativeApprover"></a>

```java
public AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList getAlternativeApprover();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApproverList</a>

---

##### `primaryApprover`<sup>Required</sup> <a name="primaryApprover" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.primaryApprover"></a>

```java
public AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList getPrimaryApprover();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList</a>

---

##### `alternativeApprovalEnabledInput`<sup>Optional</sup> <a name="alternativeApprovalEnabledInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.alternativeApprovalEnabledInput"></a>

```java
public java.lang.Object getAlternativeApprovalEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alternativeApproverInput`<sup>Optional</sup> <a name="alternativeApproverInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.alternativeApproverInput"></a>

```java
public java.lang.Object getAlternativeApproverInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageAlternativeApprover</a>>

---

##### `approvalTimeoutInDaysInput`<sup>Optional</sup> <a name="approvalTimeoutInDaysInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.approvalTimeoutInDaysInput"></a>

```java
public java.lang.Number getApprovalTimeoutInDaysInput();
```

- *Type:* java.lang.Number

---

##### `approverJustificationRequiredInput`<sup>Optional</sup> <a name="approverJustificationRequiredInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.approverJustificationRequiredInput"></a>

```java
public java.lang.Object getApproverJustificationRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableAlternativeApprovalInDaysInput`<sup>Optional</sup> <a name="enableAlternativeApprovalInDaysInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.enableAlternativeApprovalInDaysInput"></a>

```java
public java.lang.Number getEnableAlternativeApprovalInDaysInput();
```

- *Type:* java.lang.Number

---

##### `primaryApproverInput`<sup>Optional</sup> <a name="primaryApproverInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.primaryApproverInput"></a>

```java
public java.lang.Object getPrimaryApproverInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>>

---

##### `alternativeApprovalEnabled`<sup>Required</sup> <a name="alternativeApprovalEnabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.alternativeApprovalEnabled"></a>

```java
public java.lang.Object getAlternativeApprovalEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `approvalTimeoutInDays`<sup>Required</sup> <a name="approvalTimeoutInDays" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.approvalTimeoutInDays"></a>

```java
public java.lang.Number getApprovalTimeoutInDays();
```

- *Type:* java.lang.Number

---

##### `approverJustificationRequired`<sup>Required</sup> <a name="approverJustificationRequired" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.approverJustificationRequired"></a>

```java
public java.lang.Object getApproverJustificationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableAlternativeApprovalInDays`<sup>Required</sup> <a name="enableAlternativeApprovalInDays" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.enableAlternativeApprovalInDays"></a>

```java
public java.lang.Number getEnableAlternativeApprovalInDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>

---


### AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList;

new AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.get"></a>

```java
public AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>>

---


### AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference <a name="AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference;

new AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.resetBackup">resetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.resetObjectId">resetObjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackup` <a name="resetBackup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.resetBackup"></a>

```java
public void resetBackup()
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.resetObjectId"></a>

```java
public void resetObjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.backupInput">backupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.subjectTypeInput">subjectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.backup">backup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.subjectType">subjectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.backupInput"></a>

```java
public java.lang.Object getBackupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `subjectTypeInput`<sup>Optional</sup> <a name="subjectTypeInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.subjectTypeInput"></a>

```java
public java.lang.String getSubjectTypeInput();
```

- *Type:* java.lang.String

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.backup"></a>

```java
public java.lang.Object getBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `subjectType`<sup>Required</sup> <a name="subjectType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.subjectType"></a>

```java
public java.lang.String getSubjectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApproverOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover">AccessPackageAssignmentPolicyApprovalSettingsApprovalStagePrimaryApprover</a>

---


### AccessPackageAssignmentPolicyApprovalSettingsOutputReference <a name="AccessPackageAssignmentPolicyApprovalSettingsOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference;

new AccessPackageAssignmentPolicyApprovalSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.putApprovalStage">putApprovalStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resetApprovalRequired">resetApprovalRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resetApprovalRequiredForExtension">resetApprovalRequiredForExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resetApprovalStage">resetApprovalStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resetRequestorJustificationRequired">resetRequestorJustificationRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApprovalStage` <a name="putApprovalStage" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.putApprovalStage"></a>

```java
public void putApprovalStage(IResolvable OR java.util.List<AccessPackageAssignmentPolicyApprovalSettingsApprovalStage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.putApprovalStage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>>

---

##### `resetApprovalRequired` <a name="resetApprovalRequired" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resetApprovalRequired"></a>

```java
public void resetApprovalRequired()
```

##### `resetApprovalRequiredForExtension` <a name="resetApprovalRequiredForExtension" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resetApprovalRequiredForExtension"></a>

```java
public void resetApprovalRequiredForExtension()
```

##### `resetApprovalStage` <a name="resetApprovalStage" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resetApprovalStage"></a>

```java
public void resetApprovalStage()
```

##### `resetRequestorJustificationRequired` <a name="resetRequestorJustificationRequired" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.resetRequestorJustificationRequired"></a>

```java
public void resetRequestorJustificationRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalStage">approvalStage</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalRequiredForExtensionInput">approvalRequiredForExtensionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalRequiredInput">approvalRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalStageInput">approvalStageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.requestorJustificationRequiredInput">requestorJustificationRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalRequired">approvalRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalRequiredForExtension">approvalRequiredForExtension</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.requestorJustificationRequired">requestorJustificationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approvalStage`<sup>Required</sup> <a name="approvalStage" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalStage"></a>

```java
public AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList getApprovalStage();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList">AccessPackageAssignmentPolicyApprovalSettingsApprovalStageList</a>

---

##### `approvalRequiredForExtensionInput`<sup>Optional</sup> <a name="approvalRequiredForExtensionInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalRequiredForExtensionInput"></a>

```java
public java.lang.Object getApprovalRequiredForExtensionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `approvalRequiredInput`<sup>Optional</sup> <a name="approvalRequiredInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalRequiredInput"></a>

```java
public java.lang.Object getApprovalRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `approvalStageInput`<sup>Optional</sup> <a name="approvalStageInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalStageInput"></a>

```java
public java.lang.Object getApprovalStageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsApprovalStage">AccessPackageAssignmentPolicyApprovalSettingsApprovalStage</a>>

---

##### `requestorJustificationRequiredInput`<sup>Optional</sup> <a name="requestorJustificationRequiredInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.requestorJustificationRequiredInput"></a>

```java
public java.lang.Object getRequestorJustificationRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `approvalRequired`<sup>Required</sup> <a name="approvalRequired" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalRequired"></a>

```java
public java.lang.Object getApprovalRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `approvalRequiredForExtension`<sup>Required</sup> <a name="approvalRequiredForExtension" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.approvalRequiredForExtension"></a>

```java
public java.lang.Object getApprovalRequiredForExtension();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requestorJustificationRequired`<sup>Required</sup> <a name="requestorJustificationRequired" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.requestorJustificationRequired"></a>

```java
public java.lang.Object getRequestorJustificationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettingsOutputReference.property.internalValue"></a>

```java
public AccessPackageAssignmentPolicyApprovalSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyApprovalSettings">AccessPackageAssignmentPolicyApprovalSettings</a>

---


### AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference <a name="AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference;

new AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.putReviewer">putReviewer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetAccessRecommendationEnabled">resetAccessRecommendationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetAccessReviewTimeoutBehavior">resetAccessReviewTimeoutBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetApproverJustificationRequired">resetApproverJustificationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetDurationInDays">resetDurationInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetReviewer">resetReviewer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetReviewFrequency">resetReviewFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetReviewType">resetReviewType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetStartingOn">resetStartingOn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReviewer` <a name="putReviewer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.putReviewer"></a>

```java
public void putReviewer(IResolvable OR java.util.List<AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.putReviewer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>>

---

##### `resetAccessRecommendationEnabled` <a name="resetAccessRecommendationEnabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetAccessRecommendationEnabled"></a>

```java
public void resetAccessRecommendationEnabled()
```

##### `resetAccessReviewTimeoutBehavior` <a name="resetAccessReviewTimeoutBehavior" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetAccessReviewTimeoutBehavior"></a>

```java
public void resetAccessReviewTimeoutBehavior()
```

##### `resetApproverJustificationRequired` <a name="resetApproverJustificationRequired" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetApproverJustificationRequired"></a>

```java
public void resetApproverJustificationRequired()
```

##### `resetDurationInDays` <a name="resetDurationInDays" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetDurationInDays"></a>

```java
public void resetDurationInDays()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetReviewer` <a name="resetReviewer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetReviewer"></a>

```java
public void resetReviewer()
```

##### `resetReviewFrequency` <a name="resetReviewFrequency" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetReviewFrequency"></a>

```java
public void resetReviewFrequency()
```

##### `resetReviewType` <a name="resetReviewType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetReviewType"></a>

```java
public void resetReviewType()
```

##### `resetStartingOn` <a name="resetStartingOn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.resetStartingOn"></a>

```java
public void resetStartingOn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewer">reviewer</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.accessRecommendationEnabledInput">accessRecommendationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.accessReviewTimeoutBehaviorInput">accessReviewTimeoutBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.approverJustificationRequiredInput">approverJustificationRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.durationInDaysInput">durationInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewerInput">reviewerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewFrequencyInput">reviewFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewTypeInput">reviewTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.startingOnInput">startingOnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.accessRecommendationEnabled">accessRecommendationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.accessReviewTimeoutBehavior">accessReviewTimeoutBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.approverJustificationRequired">approverJustificationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.durationInDays">durationInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewFrequency">reviewFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewType">reviewType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.startingOn">startingOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reviewer`<sup>Required</sup> <a name="reviewer" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewer"></a>

```java
public AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList getReviewer();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList</a>

---

##### `accessRecommendationEnabledInput`<sup>Optional</sup> <a name="accessRecommendationEnabledInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.accessRecommendationEnabledInput"></a>

```java
public java.lang.Object getAccessRecommendationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accessReviewTimeoutBehaviorInput`<sup>Optional</sup> <a name="accessReviewTimeoutBehaviorInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.accessReviewTimeoutBehaviorInput"></a>

```java
public java.lang.String getAccessReviewTimeoutBehaviorInput();
```

- *Type:* java.lang.String

---

##### `approverJustificationRequiredInput`<sup>Optional</sup> <a name="approverJustificationRequiredInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.approverJustificationRequiredInput"></a>

```java
public java.lang.Object getApproverJustificationRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `durationInDaysInput`<sup>Optional</sup> <a name="durationInDaysInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.durationInDaysInput"></a>

```java
public java.lang.Number getDurationInDaysInput();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reviewerInput`<sup>Optional</sup> <a name="reviewerInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewerInput"></a>

```java
public java.lang.Object getReviewerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>>

---

##### `reviewFrequencyInput`<sup>Optional</sup> <a name="reviewFrequencyInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewFrequencyInput"></a>

```java
public java.lang.String getReviewFrequencyInput();
```

- *Type:* java.lang.String

---

##### `reviewTypeInput`<sup>Optional</sup> <a name="reviewTypeInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewTypeInput"></a>

```java
public java.lang.String getReviewTypeInput();
```

- *Type:* java.lang.String

---

##### `startingOnInput`<sup>Optional</sup> <a name="startingOnInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.startingOnInput"></a>

```java
public java.lang.String getStartingOnInput();
```

- *Type:* java.lang.String

---

##### `accessRecommendationEnabled`<sup>Required</sup> <a name="accessRecommendationEnabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.accessRecommendationEnabled"></a>

```java
public java.lang.Object getAccessRecommendationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accessReviewTimeoutBehavior`<sup>Required</sup> <a name="accessReviewTimeoutBehavior" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.accessReviewTimeoutBehavior"></a>

```java
public java.lang.String getAccessReviewTimeoutBehavior();
```

- *Type:* java.lang.String

---

##### `approverJustificationRequired`<sup>Required</sup> <a name="approverJustificationRequired" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.approverJustificationRequired"></a>

```java
public java.lang.Object getApproverJustificationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `durationInDays`<sup>Required</sup> <a name="durationInDays" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.durationInDays"></a>

```java
public java.lang.Number getDurationInDays();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reviewFrequency`<sup>Required</sup> <a name="reviewFrequency" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewFrequency"></a>

```java
public java.lang.String getReviewFrequency();
```

- *Type:* java.lang.String

---

##### `reviewType`<sup>Required</sup> <a name="reviewType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.reviewType"></a>

```java
public java.lang.String getReviewType();
```

- *Type:* java.lang.String

---

##### `startingOn`<sup>Required</sup> <a name="startingOn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.startingOn"></a>

```java
public java.lang.String getStartingOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsOutputReference.property.internalValue"></a>

```java
public AccessPackageAssignmentPolicyAssignmentReviewSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettings">AccessPackageAssignmentPolicyAssignmentReviewSettings</a>

---


### AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList <a name="AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList;

new AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.get"></a>

```java
public AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>>

---


### AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference <a name="AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference;

new AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.resetBackup">resetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.resetObjectId">resetObjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackup` <a name="resetBackup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.resetBackup"></a>

```java
public void resetBackup()
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.resetObjectId"></a>

```java
public void resetObjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.backupInput">backupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.subjectTypeInput">subjectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.backup">backup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.subjectType">subjectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.backupInput"></a>

```java
public java.lang.Object getBackupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `subjectTypeInput`<sup>Optional</sup> <a name="subjectTypeInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.subjectTypeInput"></a>

```java
public java.lang.String getSubjectTypeInput();
```

- *Type:* java.lang.String

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.backup"></a>

```java
public java.lang.Object getBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `subjectType`<sup>Required</sup> <a name="subjectType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.subjectType"></a>

```java
public java.lang.String getSubjectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer">AccessPackageAssignmentPolicyAssignmentReviewSettingsReviewer</a>

---


### AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList <a name="AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList;

new AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.get"></a>

```java
public AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>>

---


### AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference <a name="AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference;

new AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>

---


### AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference <a name="AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference;

new AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.putLocalizedText">putLocalizedText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.resetLocalizedText">resetLocalizedText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocalizedText` <a name="putLocalizedText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.putLocalizedText"></a>

```java
public void putLocalizedText(IResolvable OR java.util.List<AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.putLocalizedText.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>>

---

##### `resetLocalizedText` <a name="resetLocalizedText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.resetLocalizedText"></a>

```java
public void resetLocalizedText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.localizedText">localizedText</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.defaultTextInput">defaultTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.localizedTextInput">localizedTextInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.defaultText">defaultText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue">AccessPackageAssignmentPolicyQuestionChoiceDisplayValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localizedText`<sup>Required</sup> <a name="localizedText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.localizedText"></a>

```java
public AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList getLocalizedText();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedTextList</a>

---

##### `defaultTextInput`<sup>Optional</sup> <a name="defaultTextInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.defaultTextInput"></a>

```java
public java.lang.String getDefaultTextInput();
```

- *Type:* java.lang.String

---

##### `localizedTextInput`<sup>Optional</sup> <a name="localizedTextInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.localizedTextInput"></a>

```java
public java.lang.Object getLocalizedTextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueLocalizedText</a>>

---

##### `defaultText`<sup>Required</sup> <a name="defaultText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.defaultText"></a>

```java
public java.lang.String getDefaultText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference.property.internalValue"></a>

```java
public AccessPackageAssignmentPolicyQuestionChoiceDisplayValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue">AccessPackageAssignmentPolicyQuestionChoiceDisplayValue</a>

---


### AccessPackageAssignmentPolicyQuestionChoiceList <a name="AccessPackageAssignmentPolicyQuestionChoiceList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyQuestionChoiceList;

new AccessPackageAssignmentPolicyQuestionChoiceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.get"></a>

```java
public AccessPackageAssignmentPolicyQuestionChoiceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>>

---


### AccessPackageAssignmentPolicyQuestionChoiceOutputReference <a name="AccessPackageAssignmentPolicyQuestionChoiceOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference;

new AccessPackageAssignmentPolicyQuestionChoiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.putDisplayValue">putDisplayValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDisplayValue` <a name="putDisplayValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.putDisplayValue"></a>

```java
public void putDisplayValue(AccessPackageAssignmentPolicyQuestionChoiceDisplayValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.putDisplayValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue">AccessPackageAssignmentPolicyQuestionChoiceDisplayValue</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.displayValue">displayValue</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.actualValueInput">actualValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.displayValueInput">displayValueInput</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue">AccessPackageAssignmentPolicyQuestionChoiceDisplayValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.actualValue">actualValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayValue`<sup>Required</sup> <a name="displayValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.displayValue"></a>

```java
public AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference getDisplayValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference">AccessPackageAssignmentPolicyQuestionChoiceDisplayValueOutputReference</a>

---

##### `actualValueInput`<sup>Optional</sup> <a name="actualValueInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.actualValueInput"></a>

```java
public java.lang.String getActualValueInput();
```

- *Type:* java.lang.String

---

##### `displayValueInput`<sup>Optional</sup> <a name="displayValueInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.displayValueInput"></a>

```java
public AccessPackageAssignmentPolicyQuestionChoiceDisplayValue getDisplayValueInput();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceDisplayValue">AccessPackageAssignmentPolicyQuestionChoiceDisplayValue</a>

---

##### `actualValue`<sup>Required</sup> <a name="actualValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.actualValue"></a>

```java
public java.lang.String getActualValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>

---


### AccessPackageAssignmentPolicyQuestionList <a name="AccessPackageAssignmentPolicyQuestionList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyQuestionList;

new AccessPackageAssignmentPolicyQuestionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.get"></a>

```java
public AccessPackageAssignmentPolicyQuestionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>>

---


### AccessPackageAssignmentPolicyQuestionOutputReference <a name="AccessPackageAssignmentPolicyQuestionOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyQuestionOutputReference;

new AccessPackageAssignmentPolicyQuestionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.putChoice">putChoice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resetChoice">resetChoice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resetSequence">resetSequence</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChoice` <a name="putChoice" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.putChoice"></a>

```java
public void putChoice(IResolvable OR java.util.List<AccessPackageAssignmentPolicyQuestionChoice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.putChoice.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>>

---

##### `putText` <a name="putText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.putText"></a>

```java
public void putText(AccessPackageAssignmentPolicyQuestionText value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText">AccessPackageAssignmentPolicyQuestionText</a>

---

##### `resetChoice` <a name="resetChoice" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resetChoice"></a>

```java
public void resetChoice()
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetSequence` <a name="resetSequence" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.resetSequence"></a>

```java
public void resetSequence()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.choice">choice</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList">AccessPackageAssignmentPolicyQuestionChoiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference">AccessPackageAssignmentPolicyQuestionTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.choiceInput">choiceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.sequenceInput">sequenceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.textInput">textInput</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText">AccessPackageAssignmentPolicyQuestionText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.sequence">sequence</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `choice`<sup>Required</sup> <a name="choice" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.choice"></a>

```java
public AccessPackageAssignmentPolicyQuestionChoiceList getChoice();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoiceList">AccessPackageAssignmentPolicyQuestionChoiceList</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.text"></a>

```java
public AccessPackageAssignmentPolicyQuestionTextOutputReference getText();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference">AccessPackageAssignmentPolicyQuestionTextOutputReference</a>

---

##### `choiceInput`<sup>Optional</sup> <a name="choiceInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.choiceInput"></a>

```java
public java.lang.Object getChoiceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionChoice">AccessPackageAssignmentPolicyQuestionChoice</a>>

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.requiredInput"></a>

```java
public java.lang.Object getRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sequenceInput`<sup>Optional</sup> <a name="sequenceInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.sequenceInput"></a>

```java
public java.lang.Number getSequenceInput();
```

- *Type:* java.lang.Number

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.textInput"></a>

```java
public AccessPackageAssignmentPolicyQuestionText getTextInput();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText">AccessPackageAssignmentPolicyQuestionText</a>

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sequence`<sup>Required</sup> <a name="sequence" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.sequence"></a>

```java
public java.lang.Number getSequence();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestion">AccessPackageAssignmentPolicyQuestion</a>

---


### AccessPackageAssignmentPolicyQuestionTextLocalizedTextList <a name="AccessPackageAssignmentPolicyQuestionTextLocalizedTextList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList;

new AccessPackageAssignmentPolicyQuestionTextLocalizedTextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.get"></a>

```java
public AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>>

---


### AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference <a name="AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference;

new AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>

---


### AccessPackageAssignmentPolicyQuestionTextOutputReference <a name="AccessPackageAssignmentPolicyQuestionTextOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyQuestionTextOutputReference;

new AccessPackageAssignmentPolicyQuestionTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.putLocalizedText">putLocalizedText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.resetLocalizedText">resetLocalizedText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocalizedText` <a name="putLocalizedText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.putLocalizedText"></a>

```java
public void putLocalizedText(IResolvable OR java.util.List<AccessPackageAssignmentPolicyQuestionTextLocalizedText> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.putLocalizedText.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>>

---

##### `resetLocalizedText` <a name="resetLocalizedText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.resetLocalizedText"></a>

```java
public void resetLocalizedText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.localizedText">localizedText</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList">AccessPackageAssignmentPolicyQuestionTextLocalizedTextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.defaultTextInput">defaultTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.localizedTextInput">localizedTextInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.defaultText">defaultText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText">AccessPackageAssignmentPolicyQuestionText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localizedText`<sup>Required</sup> <a name="localizedText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.localizedText"></a>

```java
public AccessPackageAssignmentPolicyQuestionTextLocalizedTextList getLocalizedText();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedTextList">AccessPackageAssignmentPolicyQuestionTextLocalizedTextList</a>

---

##### `defaultTextInput`<sup>Optional</sup> <a name="defaultTextInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.defaultTextInput"></a>

```java
public java.lang.String getDefaultTextInput();
```

- *Type:* java.lang.String

---

##### `localizedTextInput`<sup>Optional</sup> <a name="localizedTextInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.localizedTextInput"></a>

```java
public java.lang.Object getLocalizedTextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextLocalizedText">AccessPackageAssignmentPolicyQuestionTextLocalizedText</a>>

---

##### `defaultText`<sup>Required</sup> <a name="defaultText" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.defaultText"></a>

```java
public java.lang.String getDefaultText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionTextOutputReference.property.internalValue"></a>

```java
public AccessPackageAssignmentPolicyQuestionText getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyQuestionText">AccessPackageAssignmentPolicyQuestionText</a>

---


### AccessPackageAssignmentPolicyRequestorSettingsOutputReference <a name="AccessPackageAssignmentPolicyRequestorSettingsOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference;

new AccessPackageAssignmentPolicyRequestorSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.putRequestor">putRequestor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resetRequestor">resetRequestor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resetRequestsAccepted">resetRequestsAccepted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resetScopeType">resetScopeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestor` <a name="putRequestor" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.putRequestor"></a>

```java
public void putRequestor(IResolvable OR java.util.List<AccessPackageAssignmentPolicyRequestorSettingsRequestor> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.putRequestor.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>>

---

##### `resetRequestor` <a name="resetRequestor" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resetRequestor"></a>

```java
public void resetRequestor()
```

##### `resetRequestsAccepted` <a name="resetRequestsAccepted" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resetRequestsAccepted"></a>

```java
public void resetRequestsAccepted()
```

##### `resetScopeType` <a name="resetScopeType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.resetScopeType"></a>

```java
public void resetScopeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.requestor">requestor</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList">AccessPackageAssignmentPolicyRequestorSettingsRequestorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.requestorInput">requestorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.requestsAcceptedInput">requestsAcceptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.scopeTypeInput">scopeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.requestsAccepted">requestsAccepted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.scopeType">scopeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestor`<sup>Required</sup> <a name="requestor" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.requestor"></a>

```java
public AccessPackageAssignmentPolicyRequestorSettingsRequestorList getRequestor();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList">AccessPackageAssignmentPolicyRequestorSettingsRequestorList</a>

---

##### `requestorInput`<sup>Optional</sup> <a name="requestorInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.requestorInput"></a>

```java
public java.lang.Object getRequestorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>>

---

##### `requestsAcceptedInput`<sup>Optional</sup> <a name="requestsAcceptedInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.requestsAcceptedInput"></a>

```java
public java.lang.Object getRequestsAcceptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scopeTypeInput`<sup>Optional</sup> <a name="scopeTypeInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.scopeTypeInput"></a>

```java
public java.lang.String getScopeTypeInput();
```

- *Type:* java.lang.String

---

##### `requestsAccepted`<sup>Required</sup> <a name="requestsAccepted" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.requestsAccepted"></a>

```java
public java.lang.Object getRequestsAccepted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scopeType`<sup>Required</sup> <a name="scopeType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.scopeType"></a>

```java
public java.lang.String getScopeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsOutputReference.property.internalValue"></a>

```java
public AccessPackageAssignmentPolicyRequestorSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettings">AccessPackageAssignmentPolicyRequestorSettings</a>

---


### AccessPackageAssignmentPolicyRequestorSettingsRequestorList <a name="AccessPackageAssignmentPolicyRequestorSettingsRequestorList" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList;

new AccessPackageAssignmentPolicyRequestorSettingsRequestorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.get"></a>

```java
public AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>>

---


### AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference <a name="AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference;

new AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.resetBackup">resetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.resetObjectId">resetObjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackup` <a name="resetBackup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.resetBackup"></a>

```java
public void resetBackup()
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.resetObjectId"></a>

```java
public void resetObjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.backupInput">backupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.subjectTypeInput">subjectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.backup">backup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.subjectType">subjectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.backupInput"></a>

```java
public java.lang.Object getBackupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `subjectTypeInput`<sup>Optional</sup> <a name="subjectTypeInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.subjectTypeInput"></a>

```java
public java.lang.String getSubjectTypeInput();
```

- *Type:* java.lang.String

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.backup"></a>

```java
public java.lang.Object getBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `subjectType`<sup>Required</sup> <a name="subjectType" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.subjectType"></a>

```java
public java.lang.String getSubjectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyRequestorSettingsRequestor">AccessPackageAssignmentPolicyRequestorSettingsRequestor</a>

---


### AccessPackageAssignmentPolicyTimeoutsOutputReference <a name="AccessPackageAssignmentPolicyTimeoutsOutputReference" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_assignment_policy.AccessPackageAssignmentPolicyTimeoutsOutputReference;

new AccessPackageAssignmentPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageAssignmentPolicy.AccessPackageAssignmentPolicyTimeouts">AccessPackageAssignmentPolicyTimeouts</a>

---



