# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-azuread.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-azuread.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user azuread_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.user.User.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import user

user.User(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  user_principal_name: str,
  account_enabled: typing.Union[bool, IResolvable] = None,
  age_group: str = None,
  business_phones: typing.List[str] = None,
  city: str = None,
  company_name: str = None,
  consent_provided_for_minor: str = None,
  cost_center: str = None,
  country: str = None,
  department: str = None,
  disable_password_expiration: typing.Union[bool, IResolvable] = None,
  disable_strong_password: typing.Union[bool, IResolvable] = None,
  division: str = None,
  employee_hire_date: str = None,
  employee_id: str = None,
  employee_type: str = None,
  fax_number: str = None,
  force_password_change: typing.Union[bool, IResolvable] = None,
  given_name: str = None,
  id: str = None,
  job_title: str = None,
  mail: str = None,
  mail_nickname: str = None,
  manager_id: str = None,
  mobile_phone: str = None,
  office_location: str = None,
  onpremises_immutable_id: str = None,
  other_mails: typing.List[str] = None,
  password: str = None,
  postal_code: str = None,
  preferred_language: str = None,
  show_in_address_list: typing.Union[bool, IResolvable] = None,
  state: str = None,
  street_address: str = None,
  surname: str = None,
  timeouts: UserTimeouts = None,
  usage_location: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The name to display in the address book for the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.userPrincipalName">user_principal_name</a></code> | <code>str</code> | The user principal name (UPN) of the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.accountEnabled">account_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not the account should be enabled. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.ageGroup">age_group</a></code> | <code>str</code> | The age group of the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.businessPhones">business_phones</a></code> | <code>typing.List[str]</code> | The telephone numbers for the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.city">city</a></code> | <code>str</code> | The city in which the user is located. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.companyName">company_name</a></code> | <code>str</code> | The company name which the user is associated. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.consentProvidedForMinor">consent_provided_for_minor</a></code> | <code>str</code> | Whether consent has been obtained for minors. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.costCenter">cost_center</a></code> | <code>str</code> | The cost center associated with the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.country">country</a></code> | <code>str</code> | The country/region in which the user is located, e.g. `US` or `UK`. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.department">department</a></code> | <code>str</code> | The name for the department in which the user works. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.disablePasswordExpiration">disable_password_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the users password is exempt from expiring. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.disableStrongPassword">disable_strong_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the user is allowed weaker passwords than the default policy to be specified. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.division">division</a></code> | <code>str</code> | The name of the division in which the user works. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.employeeHireDate">employee_hire_date</a></code> | <code>str</code> | The hire date of the user, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.employeeId">employee_id</a></code> | <code>str</code> | The employee identifier assigned to the user by the organisation. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.employeeType">employee_type</a></code> | <code>str</code> | Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.faxNumber">fax_number</a></code> | <code>str</code> | The fax number of the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.forcePasswordChange">force_password_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the user is forced to change the password during the next sign-in. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.givenName">given_name</a></code> | <code>str</code> | The given name (first name) of the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.jobTitle">job_title</a></code> | <code>str</code> | The user’s job title. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.mail">mail</a></code> | <code>str</code> | The SMTP address for the user. Cannot be unset. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.mailNickname">mail_nickname</a></code> | <code>str</code> | The mail alias for the user. Defaults to the user name part of the user principal name (UPN). |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.managerId">manager_id</a></code> | <code>str</code> | The object ID of the user's manager. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.mobilePhone">mobile_phone</a></code> | <code>str</code> | The primary cellular telephone number for the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.officeLocation">office_location</a></code> | <code>str</code> | The office location in the user's place of business. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.onpremisesImmutableId">onpremises_immutable_id</a></code> | <code>str</code> | The value used to associate an on-premise Active Directory user account with their Azure AD user object. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.otherMails">other_mails</a></code> | <code>typing.List[str]</code> | Additional email addresses for the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.password">password</a></code> | <code>str</code> | The password for the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.postalCode">postal_code</a></code> | <code>str</code> | The postal code for the user's postal address. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.preferredLanguage">preferred_language</a></code> | <code>str</code> | The user's preferred language, in ISO 639-1 notation. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.showInAddressList">show_in_address_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not the Outlook global address list should include this user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.state">state</a></code> | <code>str</code> | The state or province in the user's address. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.streetAddress">street_address</a></code> | <code>str</code> | The street address of the user's place of business. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.surname">surname</a></code> | <code>str</code> | The user's surname (family name or last name). |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.usageLocation">usage_location</a></code> | <code>str</code> | The usage location of the user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.user.User.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.user.User.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.user.User.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.user.User.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.user.User.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.user.User.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.user.User.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.user.User.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.user.User.Initializer.parameter.displayName"></a>

- *Type:* str

The name to display in the address book for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#display_name User#display_name}

---

##### `user_principal_name`<sup>Required</sup> <a name="user_principal_name" id="@cdktf/provider-azuread.user.User.Initializer.parameter.userPrincipalName"></a>

- *Type:* str

The user principal name (UPN) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#user_principal_name User#user_principal_name}

---

##### `account_enabled`<sup>Optional</sup> <a name="account_enabled" id="@cdktf/provider-azuread.user.User.Initializer.parameter.accountEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not the account should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#account_enabled User#account_enabled}

---

##### `age_group`<sup>Optional</sup> <a name="age_group" id="@cdktf/provider-azuread.user.User.Initializer.parameter.ageGroup"></a>

- *Type:* str

The age group of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#age_group User#age_group}

---

##### `business_phones`<sup>Optional</sup> <a name="business_phones" id="@cdktf/provider-azuread.user.User.Initializer.parameter.businessPhones"></a>

- *Type:* typing.List[str]

The telephone numbers for the user.

Only one number can be set for this property. Read-only for users synced with Azure AD Connect

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#business_phones User#business_phones}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-azuread.user.User.Initializer.parameter.city"></a>

- *Type:* str

The city in which the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#city User#city}

---

##### `company_name`<sup>Optional</sup> <a name="company_name" id="@cdktf/provider-azuread.user.User.Initializer.parameter.companyName"></a>

- *Type:* str

The company name which the user is associated.

This property can be useful for describing the company that an external user comes from

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#company_name User#company_name}

---

##### `consent_provided_for_minor`<sup>Optional</sup> <a name="consent_provided_for_minor" id="@cdktf/provider-azuread.user.User.Initializer.parameter.consentProvidedForMinor"></a>

- *Type:* str

Whether consent has been obtained for minors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#consent_provided_for_minor User#consent_provided_for_minor}

---

##### `cost_center`<sup>Optional</sup> <a name="cost_center" id="@cdktf/provider-azuread.user.User.Initializer.parameter.costCenter"></a>

- *Type:* str

The cost center associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#cost_center User#cost_center}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-azuread.user.User.Initializer.parameter.country"></a>

- *Type:* str

The country/region in which the user is located, e.g. `US` or `UK`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#country User#country}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-azuread.user.User.Initializer.parameter.department"></a>

- *Type:* str

The name for the department in which the user works.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#department User#department}

---

##### `disable_password_expiration`<sup>Optional</sup> <a name="disable_password_expiration" id="@cdktf/provider-azuread.user.User.Initializer.parameter.disablePasswordExpiration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the users password is exempt from expiring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#disable_password_expiration User#disable_password_expiration}

---

##### `disable_strong_password`<sup>Optional</sup> <a name="disable_strong_password" id="@cdktf/provider-azuread.user.User.Initializer.parameter.disableStrongPassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the user is allowed weaker passwords than the default policy to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#disable_strong_password User#disable_strong_password}

---

##### `division`<sup>Optional</sup> <a name="division" id="@cdktf/provider-azuread.user.User.Initializer.parameter.division"></a>

- *Type:* str

The name of the division in which the user works.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#division User#division}

---

##### `employee_hire_date`<sup>Optional</sup> <a name="employee_hire_date" id="@cdktf/provider-azuread.user.User.Initializer.parameter.employeeHireDate"></a>

- *Type:* str

The hire date of the user, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#employee_hire_date User#employee_hire_date}

---

##### `employee_id`<sup>Optional</sup> <a name="employee_id" id="@cdktf/provider-azuread.user.User.Initializer.parameter.employeeId"></a>

- *Type:* str

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#employee_id User#employee_id}

---

##### `employee_type`<sup>Optional</sup> <a name="employee_type" id="@cdktf/provider-azuread.user.User.Initializer.parameter.employeeType"></a>

- *Type:* str

Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#employee_type User#employee_type}

---

##### `fax_number`<sup>Optional</sup> <a name="fax_number" id="@cdktf/provider-azuread.user.User.Initializer.parameter.faxNumber"></a>

- *Type:* str

The fax number of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#fax_number User#fax_number}

---

##### `force_password_change`<sup>Optional</sup> <a name="force_password_change" id="@cdktf/provider-azuread.user.User.Initializer.parameter.forcePasswordChange"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the user is forced to change the password during the next sign-in.

Only takes effect when also changing the password

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#force_password_change User#force_password_change}

---

##### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktf/provider-azuread.user.User.Initializer.parameter.givenName"></a>

- *Type:* str

The given name (first name) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#given_name User#given_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.user.User.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_title`<sup>Optional</sup> <a name="job_title" id="@cdktf/provider-azuread.user.User.Initializer.parameter.jobTitle"></a>

- *Type:* str

The user’s job title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#job_title User#job_title}

---

##### `mail`<sup>Optional</sup> <a name="mail" id="@cdktf/provider-azuread.user.User.Initializer.parameter.mail"></a>

- *Type:* str

The SMTP address for the user. Cannot be unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#mail User#mail}

---

##### `mail_nickname`<sup>Optional</sup> <a name="mail_nickname" id="@cdktf/provider-azuread.user.User.Initializer.parameter.mailNickname"></a>

- *Type:* str

The mail alias for the user. Defaults to the user name part of the user principal name (UPN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#mail_nickname User#mail_nickname}

---

##### `manager_id`<sup>Optional</sup> <a name="manager_id" id="@cdktf/provider-azuread.user.User.Initializer.parameter.managerId"></a>

- *Type:* str

The object ID of the user's manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#manager_id User#manager_id}

---

##### `mobile_phone`<sup>Optional</sup> <a name="mobile_phone" id="@cdktf/provider-azuread.user.User.Initializer.parameter.mobilePhone"></a>

- *Type:* str

The primary cellular telephone number for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `office_location`<sup>Optional</sup> <a name="office_location" id="@cdktf/provider-azuread.user.User.Initializer.parameter.officeLocation"></a>

- *Type:* str

The office location in the user's place of business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#office_location User#office_location}

---

##### `onpremises_immutable_id`<sup>Optional</sup> <a name="onpremises_immutable_id" id="@cdktf/provider-azuread.user.User.Initializer.parameter.onpremisesImmutableId"></a>

- *Type:* str

The value used to associate an on-premise Active Directory user account with their Azure AD user object.

This must be specified if you are using a federated domain for the user's `user_principal_name` property when creating a new user account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#onpremises_immutable_id User#onpremises_immutable_id}

---

##### `other_mails`<sup>Optional</sup> <a name="other_mails" id="@cdktf/provider-azuread.user.User.Initializer.parameter.otherMails"></a>

- *Type:* typing.List[str]

Additional email addresses for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#other_mails User#other_mails}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azuread.user.User.Initializer.parameter.password"></a>

- *Type:* str

The password for the user.

The password must satisfy minimum requirements as specified by the password policy. The maximum length is 256 characters. This property is required when creating a new user

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#password User#password}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-azuread.user.User.Initializer.parameter.postalCode"></a>

- *Type:* str

The postal code for the user's postal address.

The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#postal_code User#postal_code}

---

##### `preferred_language`<sup>Optional</sup> <a name="preferred_language" id="@cdktf/provider-azuread.user.User.Initializer.parameter.preferredLanguage"></a>

- *Type:* str

The user's preferred language, in ISO 639-1 notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#preferred_language User#preferred_language}

---

##### `show_in_address_list`<sup>Optional</sup> <a name="show_in_address_list" id="@cdktf/provider-azuread.user.User.Initializer.parameter.showInAddressList"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not the Outlook global address list should include this user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#show_in_address_list User#show_in_address_list}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-azuread.user.User.Initializer.parameter.state"></a>

- *Type:* str

The state or province in the user's address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#state User#state}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-azuread.user.User.Initializer.parameter.streetAddress"></a>

- *Type:* str

The street address of the user's place of business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#street_address User#street_address}

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktf/provider-azuread.user.User.Initializer.parameter.surname"></a>

- *Type:* str

The user's surname (family name or last name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#surname User#surname}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.user.User.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#timeouts User#timeouts}

---

##### `usage_location`<sup>Optional</sup> <a name="usage_location" id="@cdktf/provider-azuread.user.User.Initializer.parameter.usageLocation"></a>

- *Type:* str

The usage location of the user.

Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. The usage location is a two letter country code (ISO standard 3166). Examples include: `NO`, `JP`, and `GB`. Cannot be reset to null once set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#usage_location User#usage_location}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.user.User.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.user.User.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.user.User.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.user.User.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.user.User.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.user.User.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.user.User.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetAccountEnabled">reset_account_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetAgeGroup">reset_age_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetBusinessPhones">reset_business_phones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCompanyName">reset_company_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetConsentProvidedForMinor">reset_consent_provided_for_minor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCostCenter">reset_cost_center</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDepartment">reset_department</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDisablePasswordExpiration">reset_disable_password_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDisableStrongPassword">reset_disable_strong_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDivision">reset_division</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetEmployeeHireDate">reset_employee_hire_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetEmployeeId">reset_employee_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetEmployeeType">reset_employee_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetFaxNumber">reset_fax_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetForcePasswordChange">reset_force_password_change</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetGivenName">reset_given_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetJobTitle">reset_job_title</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetMail">reset_mail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetMailNickname">reset_mail_nickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetManagerId">reset_manager_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetMobilePhone">reset_mobile_phone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOfficeLocation">reset_office_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOnpremisesImmutableId">reset_onpremises_immutable_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOtherMails">reset_other_mails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetPreferredLanguage">reset_preferred_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetShowInAddressList">reset_show_in_address_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetStreetAddress">reset_street_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetSurname">reset_surname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetUsageLocation">reset_usage_location</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.user.User.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.user.User.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.user.User.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.user.User.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.user.User.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.user.User.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.user.User.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.user.User.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.user.User.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.user.User.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.user.User.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.user.User.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.user.User.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.user.User.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.user.User.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.user.User.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.user.User.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.user.User.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.user.User.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.user.User.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.user.User.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.user.User.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.user.User.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.user.User.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.user.User.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.user.User.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.user.User.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.user.User.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.user.User.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.user.User.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.user.User.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.user.User.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#create User#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.user.User.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#delete User#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.user.User.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#read User#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.user.User.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#update User#update}.

---

##### `reset_account_enabled` <a name="reset_account_enabled" id="@cdktf/provider-azuread.user.User.resetAccountEnabled"></a>

```python
def reset_account_enabled() -> None
```

##### `reset_age_group` <a name="reset_age_group" id="@cdktf/provider-azuread.user.User.resetAgeGroup"></a>

```python
def reset_age_group() -> None
```

##### `reset_business_phones` <a name="reset_business_phones" id="@cdktf/provider-azuread.user.User.resetBusinessPhones"></a>

```python
def reset_business_phones() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktf/provider-azuread.user.User.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_company_name` <a name="reset_company_name" id="@cdktf/provider-azuread.user.User.resetCompanyName"></a>

```python
def reset_company_name() -> None
```

##### `reset_consent_provided_for_minor` <a name="reset_consent_provided_for_minor" id="@cdktf/provider-azuread.user.User.resetConsentProvidedForMinor"></a>

```python
def reset_consent_provided_for_minor() -> None
```

##### `reset_cost_center` <a name="reset_cost_center" id="@cdktf/provider-azuread.user.User.resetCostCenter"></a>

```python
def reset_cost_center() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktf/provider-azuread.user.User.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_department` <a name="reset_department" id="@cdktf/provider-azuread.user.User.resetDepartment"></a>

```python
def reset_department() -> None
```

##### `reset_disable_password_expiration` <a name="reset_disable_password_expiration" id="@cdktf/provider-azuread.user.User.resetDisablePasswordExpiration"></a>

```python
def reset_disable_password_expiration() -> None
```

##### `reset_disable_strong_password` <a name="reset_disable_strong_password" id="@cdktf/provider-azuread.user.User.resetDisableStrongPassword"></a>

```python
def reset_disable_strong_password() -> None
```

##### `reset_division` <a name="reset_division" id="@cdktf/provider-azuread.user.User.resetDivision"></a>

```python
def reset_division() -> None
```

##### `reset_employee_hire_date` <a name="reset_employee_hire_date" id="@cdktf/provider-azuread.user.User.resetEmployeeHireDate"></a>

```python
def reset_employee_hire_date() -> None
```

##### `reset_employee_id` <a name="reset_employee_id" id="@cdktf/provider-azuread.user.User.resetEmployeeId"></a>

```python
def reset_employee_id() -> None
```

##### `reset_employee_type` <a name="reset_employee_type" id="@cdktf/provider-azuread.user.User.resetEmployeeType"></a>

```python
def reset_employee_type() -> None
```

##### `reset_fax_number` <a name="reset_fax_number" id="@cdktf/provider-azuread.user.User.resetFaxNumber"></a>

```python
def reset_fax_number() -> None
```

##### `reset_force_password_change` <a name="reset_force_password_change" id="@cdktf/provider-azuread.user.User.resetForcePasswordChange"></a>

```python
def reset_force_password_change() -> None
```

##### `reset_given_name` <a name="reset_given_name" id="@cdktf/provider-azuread.user.User.resetGivenName"></a>

```python
def reset_given_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.user.User.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_job_title` <a name="reset_job_title" id="@cdktf/provider-azuread.user.User.resetJobTitle"></a>

```python
def reset_job_title() -> None
```

##### `reset_mail` <a name="reset_mail" id="@cdktf/provider-azuread.user.User.resetMail"></a>

```python
def reset_mail() -> None
```

##### `reset_mail_nickname` <a name="reset_mail_nickname" id="@cdktf/provider-azuread.user.User.resetMailNickname"></a>

```python
def reset_mail_nickname() -> None
```

##### `reset_manager_id` <a name="reset_manager_id" id="@cdktf/provider-azuread.user.User.resetManagerId"></a>

```python
def reset_manager_id() -> None
```

##### `reset_mobile_phone` <a name="reset_mobile_phone" id="@cdktf/provider-azuread.user.User.resetMobilePhone"></a>

```python
def reset_mobile_phone() -> None
```

##### `reset_office_location` <a name="reset_office_location" id="@cdktf/provider-azuread.user.User.resetOfficeLocation"></a>

```python
def reset_office_location() -> None
```

##### `reset_onpremises_immutable_id` <a name="reset_onpremises_immutable_id" id="@cdktf/provider-azuread.user.User.resetOnpremisesImmutableId"></a>

```python
def reset_onpremises_immutable_id() -> None
```

##### `reset_other_mails` <a name="reset_other_mails" id="@cdktf/provider-azuread.user.User.resetOtherMails"></a>

```python
def reset_other_mails() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azuread.user.User.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-azuread.user.User.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_preferred_language` <a name="reset_preferred_language" id="@cdktf/provider-azuread.user.User.resetPreferredLanguage"></a>

```python
def reset_preferred_language() -> None
```

##### `reset_show_in_address_list` <a name="reset_show_in_address_list" id="@cdktf/provider-azuread.user.User.resetShowInAddressList"></a>

```python
def reset_show_in_address_list() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-azuread.user.User.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_street_address` <a name="reset_street_address" id="@cdktf/provider-azuread.user.User.resetStreetAddress"></a>

```python
def reset_street_address() -> None
```

##### `reset_surname` <a name="reset_surname" id="@cdktf/provider-azuread.user.User.resetSurname"></a>

```python
def reset_surname() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.user.User.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_usage_location` <a name="reset_usage_location" id="@cdktf/provider-azuread.user.User.resetUsageLocation"></a>

```python
def reset_usage_location() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.user.User.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.user.User.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import user

user.User.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.user.User.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.user.User.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import user

user.User.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.user.User.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.user.User.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import user

user.User.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.user.User.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.user.User.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import user

user.User.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the User to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.user.User.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.aboutMe">about_me</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.creationType">creation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.externalUserState">external_user_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.imAddresses">im_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesDistinguishedName">onpremises_distinguished_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesDomainName">onpremises_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesSamAccountName">onpremises_sam_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesSecurityIdentifier">onpremises_security_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesSyncEnabled">onpremises_sync_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesUserPrincipalName">onpremises_user_principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.proxyAddresses">proxy_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.userType">user_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.accountEnabledInput">account_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.ageGroupInput">age_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.businessPhonesInput">business_phones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.companyNameInput">company_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.consentProvidedForMinorInput">consent_provided_for_minor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.costCenterInput">cost_center_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.departmentInput">department_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disablePasswordExpirationInput">disable_password_expiration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disableStrongPasswordInput">disable_strong_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.divisionInput">division_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeHireDateInput">employee_hire_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeIdInput">employee_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeTypeInput">employee_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.faxNumberInput">fax_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.forcePasswordChangeInput">force_password_change_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.givenNameInput">given_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.jobTitleInput">job_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mailInput">mail_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mailNicknameInput">mail_nickname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.managerIdInput">manager_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mobilePhoneInput">mobile_phone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.officeLocationInput">office_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesImmutableIdInput">onpremises_immutable_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.otherMailsInput">other_mails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.preferredLanguageInput">preferred_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.showInAddressListInput">show_in_address_list_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.streetAddressInput">street_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.surnameInput">surname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.usageLocationInput">usage_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.userPrincipalNameInput">user_principal_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.accountEnabled">account_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.ageGroup">age_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.businessPhones">business_phones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.consentProvidedForMinor">consent_provided_for_minor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.costCenter">cost_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.department">department</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disablePasswordExpiration">disable_password_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disableStrongPassword">disable_strong_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.division">division</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeHireDate">employee_hire_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeId">employee_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeType">employee_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.faxNumber">fax_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.forcePasswordChange">force_password_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.jobTitle">job_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mail">mail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mailNickname">mail_nickname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.managerId">manager_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mobilePhone">mobile_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.officeLocation">office_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesImmutableId">onpremises_immutable_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.otherMails">other_mails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.showInAddressList">show_in_address_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.streetAddress">street_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.surname">surname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.usageLocation">usage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.userPrincipalName">user_principal_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.user.User.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.user.User.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.user.User.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.user.User.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.user.User.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.user.User.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.user.User.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.user.User.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.user.User.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.user.User.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.user.User.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.user.User.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.user.User.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.user.User.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `about_me`<sup>Required</sup> <a name="about_me" id="@cdktf/provider-azuread.user.User.property.aboutMe"></a>

```python
about_me: str
```

- *Type:* str

---

##### `creation_type`<sup>Required</sup> <a name="creation_type" id="@cdktf/provider-azuread.user.User.property.creationType"></a>

```python
creation_type: str
```

- *Type:* str

---

##### `external_user_state`<sup>Required</sup> <a name="external_user_state" id="@cdktf/provider-azuread.user.User.property.externalUserState"></a>

```python
external_user_state: str
```

- *Type:* str

---

##### `im_addresses`<sup>Required</sup> <a name="im_addresses" id="@cdktf/provider-azuread.user.User.property.imAddresses"></a>

```python
im_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.user.User.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `onpremises_distinguished_name`<sup>Required</sup> <a name="onpremises_distinguished_name" id="@cdktf/provider-azuread.user.User.property.onpremisesDistinguishedName"></a>

```python
onpremises_distinguished_name: str
```

- *Type:* str

---

##### `onpremises_domain_name`<sup>Required</sup> <a name="onpremises_domain_name" id="@cdktf/provider-azuread.user.User.property.onpremisesDomainName"></a>

```python
onpremises_domain_name: str
```

- *Type:* str

---

##### `onpremises_sam_account_name`<sup>Required</sup> <a name="onpremises_sam_account_name" id="@cdktf/provider-azuread.user.User.property.onpremisesSamAccountName"></a>

```python
onpremises_sam_account_name: str
```

- *Type:* str

---

##### `onpremises_security_identifier`<sup>Required</sup> <a name="onpremises_security_identifier" id="@cdktf/provider-azuread.user.User.property.onpremisesSecurityIdentifier"></a>

```python
onpremises_security_identifier: str
```

- *Type:* str

---

##### `onpremises_sync_enabled`<sup>Required</sup> <a name="onpremises_sync_enabled" id="@cdktf/provider-azuread.user.User.property.onpremisesSyncEnabled"></a>

```python
onpremises_sync_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `onpremises_user_principal_name`<sup>Required</sup> <a name="onpremises_user_principal_name" id="@cdktf/provider-azuread.user.User.property.onpremisesUserPrincipalName"></a>

```python
onpremises_user_principal_name: str
```

- *Type:* str

---

##### `proxy_addresses`<sup>Required</sup> <a name="proxy_addresses" id="@cdktf/provider-azuread.user.User.property.proxyAddresses"></a>

```python
proxy_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.user.User.property.timeouts"></a>

```python
timeouts: UserTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a>

---

##### `user_type`<sup>Required</sup> <a name="user_type" id="@cdktf/provider-azuread.user.User.property.userType"></a>

```python
user_type: str
```

- *Type:* str

---

##### `account_enabled_input`<sup>Optional</sup> <a name="account_enabled_input" id="@cdktf/provider-azuread.user.User.property.accountEnabledInput"></a>

```python
account_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `age_group_input`<sup>Optional</sup> <a name="age_group_input" id="@cdktf/provider-azuread.user.User.property.ageGroupInput"></a>

```python
age_group_input: str
```

- *Type:* str

---

##### `business_phones_input`<sup>Optional</sup> <a name="business_phones_input" id="@cdktf/provider-azuread.user.User.property.businessPhonesInput"></a>

```python
business_phones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-azuread.user.User.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `company_name_input`<sup>Optional</sup> <a name="company_name_input" id="@cdktf/provider-azuread.user.User.property.companyNameInput"></a>

```python
company_name_input: str
```

- *Type:* str

---

##### `consent_provided_for_minor_input`<sup>Optional</sup> <a name="consent_provided_for_minor_input" id="@cdktf/provider-azuread.user.User.property.consentProvidedForMinorInput"></a>

```python
consent_provided_for_minor_input: str
```

- *Type:* str

---

##### `cost_center_input`<sup>Optional</sup> <a name="cost_center_input" id="@cdktf/provider-azuread.user.User.property.costCenterInput"></a>

```python
cost_center_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-azuread.user.User.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `department_input`<sup>Optional</sup> <a name="department_input" id="@cdktf/provider-azuread.user.User.property.departmentInput"></a>

```python
department_input: str
```

- *Type:* str

---

##### `disable_password_expiration_input`<sup>Optional</sup> <a name="disable_password_expiration_input" id="@cdktf/provider-azuread.user.User.property.disablePasswordExpirationInput"></a>

```python
disable_password_expiration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_strong_password_input`<sup>Optional</sup> <a name="disable_strong_password_input" id="@cdktf/provider-azuread.user.User.property.disableStrongPasswordInput"></a>

```python
disable_strong_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.user.User.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `division_input`<sup>Optional</sup> <a name="division_input" id="@cdktf/provider-azuread.user.User.property.divisionInput"></a>

```python
division_input: str
```

- *Type:* str

---

##### `employee_hire_date_input`<sup>Optional</sup> <a name="employee_hire_date_input" id="@cdktf/provider-azuread.user.User.property.employeeHireDateInput"></a>

```python
employee_hire_date_input: str
```

- *Type:* str

---

##### `employee_id_input`<sup>Optional</sup> <a name="employee_id_input" id="@cdktf/provider-azuread.user.User.property.employeeIdInput"></a>

```python
employee_id_input: str
```

- *Type:* str

---

##### `employee_type_input`<sup>Optional</sup> <a name="employee_type_input" id="@cdktf/provider-azuread.user.User.property.employeeTypeInput"></a>

```python
employee_type_input: str
```

- *Type:* str

---

##### `fax_number_input`<sup>Optional</sup> <a name="fax_number_input" id="@cdktf/provider-azuread.user.User.property.faxNumberInput"></a>

```python
fax_number_input: str
```

- *Type:* str

---

##### `force_password_change_input`<sup>Optional</sup> <a name="force_password_change_input" id="@cdktf/provider-azuread.user.User.property.forcePasswordChangeInput"></a>

```python
force_password_change_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `given_name_input`<sup>Optional</sup> <a name="given_name_input" id="@cdktf/provider-azuread.user.User.property.givenNameInput"></a>

```python
given_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.user.User.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `job_title_input`<sup>Optional</sup> <a name="job_title_input" id="@cdktf/provider-azuread.user.User.property.jobTitleInput"></a>

```python
job_title_input: str
```

- *Type:* str

---

##### `mail_input`<sup>Optional</sup> <a name="mail_input" id="@cdktf/provider-azuread.user.User.property.mailInput"></a>

```python
mail_input: str
```

- *Type:* str

---

##### `mail_nickname_input`<sup>Optional</sup> <a name="mail_nickname_input" id="@cdktf/provider-azuread.user.User.property.mailNicknameInput"></a>

```python
mail_nickname_input: str
```

- *Type:* str

---

##### `manager_id_input`<sup>Optional</sup> <a name="manager_id_input" id="@cdktf/provider-azuread.user.User.property.managerIdInput"></a>

```python
manager_id_input: str
```

- *Type:* str

---

##### `mobile_phone_input`<sup>Optional</sup> <a name="mobile_phone_input" id="@cdktf/provider-azuread.user.User.property.mobilePhoneInput"></a>

```python
mobile_phone_input: str
```

- *Type:* str

---

##### `office_location_input`<sup>Optional</sup> <a name="office_location_input" id="@cdktf/provider-azuread.user.User.property.officeLocationInput"></a>

```python
office_location_input: str
```

- *Type:* str

---

##### `onpremises_immutable_id_input`<sup>Optional</sup> <a name="onpremises_immutable_id_input" id="@cdktf/provider-azuread.user.User.property.onpremisesImmutableIdInput"></a>

```python
onpremises_immutable_id_input: str
```

- *Type:* str

---

##### `other_mails_input`<sup>Optional</sup> <a name="other_mails_input" id="@cdktf/provider-azuread.user.User.property.otherMailsInput"></a>

```python
other_mails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azuread.user.User.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-azuread.user.User.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `preferred_language_input`<sup>Optional</sup> <a name="preferred_language_input" id="@cdktf/provider-azuread.user.User.property.preferredLanguageInput"></a>

```python
preferred_language_input: str
```

- *Type:* str

---

##### `show_in_address_list_input`<sup>Optional</sup> <a name="show_in_address_list_input" id="@cdktf/provider-azuread.user.User.property.showInAddressListInput"></a>

```python
show_in_address_list_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-azuread.user.User.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `street_address_input`<sup>Optional</sup> <a name="street_address_input" id="@cdktf/provider-azuread.user.User.property.streetAddressInput"></a>

```python
street_address_input: str
```

- *Type:* str

---

##### `surname_input`<sup>Optional</sup> <a name="surname_input" id="@cdktf/provider-azuread.user.User.property.surnameInput"></a>

```python
surname_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.user.User.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, UserTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>]

---

##### `usage_location_input`<sup>Optional</sup> <a name="usage_location_input" id="@cdktf/provider-azuread.user.User.property.usageLocationInput"></a>

```python
usage_location_input: str
```

- *Type:* str

---

##### `user_principal_name_input`<sup>Optional</sup> <a name="user_principal_name_input" id="@cdktf/provider-azuread.user.User.property.userPrincipalNameInput"></a>

```python
user_principal_name_input: str
```

- *Type:* str

---

##### `account_enabled`<sup>Required</sup> <a name="account_enabled" id="@cdktf/provider-azuread.user.User.property.accountEnabled"></a>

```python
account_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `age_group`<sup>Required</sup> <a name="age_group" id="@cdktf/provider-azuread.user.User.property.ageGroup"></a>

```python
age_group: str
```

- *Type:* str

---

##### `business_phones`<sup>Required</sup> <a name="business_phones" id="@cdktf/provider-azuread.user.User.property.businessPhones"></a>

```python
business_phones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-azuread.user.User.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="@cdktf/provider-azuread.user.User.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `consent_provided_for_minor`<sup>Required</sup> <a name="consent_provided_for_minor" id="@cdktf/provider-azuread.user.User.property.consentProvidedForMinor"></a>

```python
consent_provided_for_minor: str
```

- *Type:* str

---

##### `cost_center`<sup>Required</sup> <a name="cost_center" id="@cdktf/provider-azuread.user.User.property.costCenter"></a>

```python
cost_center: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-azuread.user.User.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-azuread.user.User.property.department"></a>

```python
department: str
```

- *Type:* str

---

##### `disable_password_expiration`<sup>Required</sup> <a name="disable_password_expiration" id="@cdktf/provider-azuread.user.User.property.disablePasswordExpiration"></a>

```python
disable_password_expiration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_strong_password`<sup>Required</sup> <a name="disable_strong_password" id="@cdktf/provider-azuread.user.User.property.disableStrongPassword"></a>

```python
disable_strong_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.user.User.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-azuread.user.User.property.division"></a>

```python
division: str
```

- *Type:* str

---

##### `employee_hire_date`<sup>Required</sup> <a name="employee_hire_date" id="@cdktf/provider-azuread.user.User.property.employeeHireDate"></a>

```python
employee_hire_date: str
```

- *Type:* str

---

##### `employee_id`<sup>Required</sup> <a name="employee_id" id="@cdktf/provider-azuread.user.User.property.employeeId"></a>

```python
employee_id: str
```

- *Type:* str

---

##### `employee_type`<sup>Required</sup> <a name="employee_type" id="@cdktf/provider-azuread.user.User.property.employeeType"></a>

```python
employee_type: str
```

- *Type:* str

---

##### `fax_number`<sup>Required</sup> <a name="fax_number" id="@cdktf/provider-azuread.user.User.property.faxNumber"></a>

```python
fax_number: str
```

- *Type:* str

---

##### `force_password_change`<sup>Required</sup> <a name="force_password_change" id="@cdktf/provider-azuread.user.User.property.forcePasswordChange"></a>

```python
force_password_change: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktf/provider-azuread.user.User.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.user.User.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_title`<sup>Required</sup> <a name="job_title" id="@cdktf/provider-azuread.user.User.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

---

##### `mail`<sup>Required</sup> <a name="mail" id="@cdktf/provider-azuread.user.User.property.mail"></a>

```python
mail: str
```

- *Type:* str

---

##### `mail_nickname`<sup>Required</sup> <a name="mail_nickname" id="@cdktf/provider-azuread.user.User.property.mailNickname"></a>

```python
mail_nickname: str
```

- *Type:* str

---

##### `manager_id`<sup>Required</sup> <a name="manager_id" id="@cdktf/provider-azuread.user.User.property.managerId"></a>

```python
manager_id: str
```

- *Type:* str

---

##### `mobile_phone`<sup>Required</sup> <a name="mobile_phone" id="@cdktf/provider-azuread.user.User.property.mobilePhone"></a>

```python
mobile_phone: str
```

- *Type:* str

---

##### `office_location`<sup>Required</sup> <a name="office_location" id="@cdktf/provider-azuread.user.User.property.officeLocation"></a>

```python
office_location: str
```

- *Type:* str

---

##### `onpremises_immutable_id`<sup>Required</sup> <a name="onpremises_immutable_id" id="@cdktf/provider-azuread.user.User.property.onpremisesImmutableId"></a>

```python
onpremises_immutable_id: str
```

- *Type:* str

---

##### `other_mails`<sup>Required</sup> <a name="other_mails" id="@cdktf/provider-azuread.user.User.property.otherMails"></a>

```python
other_mails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azuread.user.User.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-azuread.user.User.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `preferred_language`<sup>Required</sup> <a name="preferred_language" id="@cdktf/provider-azuread.user.User.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

---

##### `show_in_address_list`<sup>Required</sup> <a name="show_in_address_list" id="@cdktf/provider-azuread.user.User.property.showInAddressList"></a>

```python
show_in_address_list: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azuread.user.User.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktf/provider-azuread.user.User.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktf/provider-azuread.user.User.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

##### `usage_location`<sup>Required</sup> <a name="usage_location" id="@cdktf/provider-azuread.user.User.property.usageLocation"></a>

```python
usage_location: str
```

- *Type:* str

---

##### `user_principal_name`<sup>Required</sup> <a name="user_principal_name" id="@cdktf/provider-azuread.user.User.property.userPrincipalName"></a>

```python
user_principal_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.user.User.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-azuread.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.user.UserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import user

user.UserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  user_principal_name: str,
  account_enabled: typing.Union[bool, IResolvable] = None,
  age_group: str = None,
  business_phones: typing.List[str] = None,
  city: str = None,
  company_name: str = None,
  consent_provided_for_minor: str = None,
  cost_center: str = None,
  country: str = None,
  department: str = None,
  disable_password_expiration: typing.Union[bool, IResolvable] = None,
  disable_strong_password: typing.Union[bool, IResolvable] = None,
  division: str = None,
  employee_hire_date: str = None,
  employee_id: str = None,
  employee_type: str = None,
  fax_number: str = None,
  force_password_change: typing.Union[bool, IResolvable] = None,
  given_name: str = None,
  id: str = None,
  job_title: str = None,
  mail: str = None,
  mail_nickname: str = None,
  manager_id: str = None,
  mobile_phone: str = None,
  office_location: str = None,
  onpremises_immutable_id: str = None,
  other_mails: typing.List[str] = None,
  password: str = None,
  postal_code: str = None,
  preferred_language: str = None,
  show_in_address_list: typing.Union[bool, IResolvable] = None,
  state: str = None,
  street_address: str = None,
  surname: str = None,
  timeouts: UserTimeouts = None,
  usage_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.displayName">display_name</a></code> | <code>str</code> | The name to display in the address book for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.userPrincipalName">user_principal_name</a></code> | <code>str</code> | The user principal name (UPN) of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.accountEnabled">account_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not the account should be enabled. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.ageGroup">age_group</a></code> | <code>str</code> | The age group of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.businessPhones">business_phones</a></code> | <code>typing.List[str]</code> | The telephone numbers for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.city">city</a></code> | <code>str</code> | The city in which the user is located. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.companyName">company_name</a></code> | <code>str</code> | The company name which the user is associated. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.consentProvidedForMinor">consent_provided_for_minor</a></code> | <code>str</code> | Whether consent has been obtained for minors. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.costCenter">cost_center</a></code> | <code>str</code> | The cost center associated with the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.country">country</a></code> | <code>str</code> | The country/region in which the user is located, e.g. `US` or `UK`. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.department">department</a></code> | <code>str</code> | The name for the department in which the user works. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.disablePasswordExpiration">disable_password_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the users password is exempt from expiring. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.disableStrongPassword">disable_strong_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the user is allowed weaker passwords than the default policy to be specified. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.division">division</a></code> | <code>str</code> | The name of the division in which the user works. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.employeeHireDate">employee_hire_date</a></code> | <code>str</code> | The hire date of the user, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.employeeId">employee_id</a></code> | <code>str</code> | The employee identifier assigned to the user by the organisation. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.employeeType">employee_type</a></code> | <code>str</code> | Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.faxNumber">fax_number</a></code> | <code>str</code> | The fax number of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.forcePasswordChange">force_password_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the user is forced to change the password during the next sign-in. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.givenName">given_name</a></code> | <code>str</code> | The given name (first name) of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.jobTitle">job_title</a></code> | <code>str</code> | The user’s job title. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.mail">mail</a></code> | <code>str</code> | The SMTP address for the user. Cannot be unset. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.mailNickname">mail_nickname</a></code> | <code>str</code> | The mail alias for the user. Defaults to the user name part of the user principal name (UPN). |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.managerId">manager_id</a></code> | <code>str</code> | The object ID of the user's manager. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.mobilePhone">mobile_phone</a></code> | <code>str</code> | The primary cellular telephone number for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.officeLocation">office_location</a></code> | <code>str</code> | The office location in the user's place of business. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.onpremisesImmutableId">onpremises_immutable_id</a></code> | <code>str</code> | The value used to associate an on-premise Active Directory user account with their Azure AD user object. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.otherMails">other_mails</a></code> | <code>typing.List[str]</code> | Additional email addresses for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.password">password</a></code> | <code>str</code> | The password for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.postalCode">postal_code</a></code> | <code>str</code> | The postal code for the user's postal address. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | The user's preferred language, in ISO 639-1 notation. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.showInAddressList">show_in_address_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not the Outlook global address list should include this user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.state">state</a></code> | <code>str</code> | The state or province in the user's address. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.streetAddress">street_address</a></code> | <code>str</code> | The street address of the user's place of business. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.surname">surname</a></code> | <code>str</code> | The user's surname (family name or last name). |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.usageLocation">usage_location</a></code> | <code>str</code> | The usage location of the user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.user.UserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.user.UserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.user.UserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.user.UserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.user.UserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.user.UserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.user.UserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.user.UserConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The name to display in the address book for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#display_name User#display_name}

---

##### `user_principal_name`<sup>Required</sup> <a name="user_principal_name" id="@cdktf/provider-azuread.user.UserConfig.property.userPrincipalName"></a>

```python
user_principal_name: str
```

- *Type:* str

The user principal name (UPN) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#user_principal_name User#user_principal_name}

---

##### `account_enabled`<sup>Optional</sup> <a name="account_enabled" id="@cdktf/provider-azuread.user.UserConfig.property.accountEnabled"></a>

```python
account_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not the account should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#account_enabled User#account_enabled}

---

##### `age_group`<sup>Optional</sup> <a name="age_group" id="@cdktf/provider-azuread.user.UserConfig.property.ageGroup"></a>

```python
age_group: str
```

- *Type:* str

The age group of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#age_group User#age_group}

---

##### `business_phones`<sup>Optional</sup> <a name="business_phones" id="@cdktf/provider-azuread.user.UserConfig.property.businessPhones"></a>

```python
business_phones: typing.List[str]
```

- *Type:* typing.List[str]

The telephone numbers for the user.

Only one number can be set for this property. Read-only for users synced with Azure AD Connect

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#business_phones User#business_phones}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-azuread.user.UserConfig.property.city"></a>

```python
city: str
```

- *Type:* str

The city in which the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#city User#city}

---

##### `company_name`<sup>Optional</sup> <a name="company_name" id="@cdktf/provider-azuread.user.UserConfig.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

The company name which the user is associated.

This property can be useful for describing the company that an external user comes from

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#company_name User#company_name}

---

##### `consent_provided_for_minor`<sup>Optional</sup> <a name="consent_provided_for_minor" id="@cdktf/provider-azuread.user.UserConfig.property.consentProvidedForMinor"></a>

```python
consent_provided_for_minor: str
```

- *Type:* str

Whether consent has been obtained for minors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#consent_provided_for_minor User#consent_provided_for_minor}

---

##### `cost_center`<sup>Optional</sup> <a name="cost_center" id="@cdktf/provider-azuread.user.UserConfig.property.costCenter"></a>

```python
cost_center: str
```

- *Type:* str

The cost center associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#cost_center User#cost_center}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-azuread.user.UserConfig.property.country"></a>

```python
country: str
```

- *Type:* str

The country/region in which the user is located, e.g. `US` or `UK`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#country User#country}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-azuread.user.UserConfig.property.department"></a>

```python
department: str
```

- *Type:* str

The name for the department in which the user works.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#department User#department}

---

##### `disable_password_expiration`<sup>Optional</sup> <a name="disable_password_expiration" id="@cdktf/provider-azuread.user.UserConfig.property.disablePasswordExpiration"></a>

```python
disable_password_expiration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the users password is exempt from expiring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#disable_password_expiration User#disable_password_expiration}

---

##### `disable_strong_password`<sup>Optional</sup> <a name="disable_strong_password" id="@cdktf/provider-azuread.user.UserConfig.property.disableStrongPassword"></a>

```python
disable_strong_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the user is allowed weaker passwords than the default policy to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#disable_strong_password User#disable_strong_password}

---

##### `division`<sup>Optional</sup> <a name="division" id="@cdktf/provider-azuread.user.UserConfig.property.division"></a>

```python
division: str
```

- *Type:* str

The name of the division in which the user works.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#division User#division}

---

##### `employee_hire_date`<sup>Optional</sup> <a name="employee_hire_date" id="@cdktf/provider-azuread.user.UserConfig.property.employeeHireDate"></a>

```python
employee_hire_date: str
```

- *Type:* str

The hire date of the user, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#employee_hire_date User#employee_hire_date}

---

##### `employee_id`<sup>Optional</sup> <a name="employee_id" id="@cdktf/provider-azuread.user.UserConfig.property.employeeId"></a>

```python
employee_id: str
```

- *Type:* str

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#employee_id User#employee_id}

---

##### `employee_type`<sup>Optional</sup> <a name="employee_type" id="@cdktf/provider-azuread.user.UserConfig.property.employeeType"></a>

```python
employee_type: str
```

- *Type:* str

Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#employee_type User#employee_type}

---

##### `fax_number`<sup>Optional</sup> <a name="fax_number" id="@cdktf/provider-azuread.user.UserConfig.property.faxNumber"></a>

```python
fax_number: str
```

- *Type:* str

The fax number of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#fax_number User#fax_number}

---

##### `force_password_change`<sup>Optional</sup> <a name="force_password_change" id="@cdktf/provider-azuread.user.UserConfig.property.forcePasswordChange"></a>

```python
force_password_change: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the user is forced to change the password during the next sign-in.

Only takes effect when also changing the password

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#force_password_change User#force_password_change}

---

##### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktf/provider-azuread.user.UserConfig.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

The given name (first name) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#given_name User#given_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.user.UserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_title`<sup>Optional</sup> <a name="job_title" id="@cdktf/provider-azuread.user.UserConfig.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

The user’s job title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#job_title User#job_title}

---

##### `mail`<sup>Optional</sup> <a name="mail" id="@cdktf/provider-azuread.user.UserConfig.property.mail"></a>

```python
mail: str
```

- *Type:* str

The SMTP address for the user. Cannot be unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#mail User#mail}

---

##### `mail_nickname`<sup>Optional</sup> <a name="mail_nickname" id="@cdktf/provider-azuread.user.UserConfig.property.mailNickname"></a>

```python
mail_nickname: str
```

- *Type:* str

The mail alias for the user. Defaults to the user name part of the user principal name (UPN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#mail_nickname User#mail_nickname}

---

##### `manager_id`<sup>Optional</sup> <a name="manager_id" id="@cdktf/provider-azuread.user.UserConfig.property.managerId"></a>

```python
manager_id: str
```

- *Type:* str

The object ID of the user's manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#manager_id User#manager_id}

---

##### `mobile_phone`<sup>Optional</sup> <a name="mobile_phone" id="@cdktf/provider-azuread.user.UserConfig.property.mobilePhone"></a>

```python
mobile_phone: str
```

- *Type:* str

The primary cellular telephone number for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `office_location`<sup>Optional</sup> <a name="office_location" id="@cdktf/provider-azuread.user.UserConfig.property.officeLocation"></a>

```python
office_location: str
```

- *Type:* str

The office location in the user's place of business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#office_location User#office_location}

---

##### `onpremises_immutable_id`<sup>Optional</sup> <a name="onpremises_immutable_id" id="@cdktf/provider-azuread.user.UserConfig.property.onpremisesImmutableId"></a>

```python
onpremises_immutable_id: str
```

- *Type:* str

The value used to associate an on-premise Active Directory user account with their Azure AD user object.

This must be specified if you are using a federated domain for the user's `user_principal_name` property when creating a new user account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#onpremises_immutable_id User#onpremises_immutable_id}

---

##### `other_mails`<sup>Optional</sup> <a name="other_mails" id="@cdktf/provider-azuread.user.UserConfig.property.otherMails"></a>

```python
other_mails: typing.List[str]
```

- *Type:* typing.List[str]

Additional email addresses for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#other_mails User#other_mails}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azuread.user.UserConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The password for the user.

The password must satisfy minimum requirements as specified by the password policy. The maximum length is 256 characters. This property is required when creating a new user

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#password User#password}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-azuread.user.UserConfig.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

The postal code for the user's postal address.

The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#postal_code User#postal_code}

---

##### `preferred_language`<sup>Optional</sup> <a name="preferred_language" id="@cdktf/provider-azuread.user.UserConfig.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

The user's preferred language, in ISO 639-1 notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#preferred_language User#preferred_language}

---

##### `show_in_address_list`<sup>Optional</sup> <a name="show_in_address_list" id="@cdktf/provider-azuread.user.UserConfig.property.showInAddressList"></a>

```python
show_in_address_list: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not the Outlook global address list should include this user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#show_in_address_list User#show_in_address_list}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-azuread.user.UserConfig.property.state"></a>

```python
state: str
```

- *Type:* str

The state or province in the user's address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#state User#state}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-azuread.user.UserConfig.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

The street address of the user's place of business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#street_address User#street_address}

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktf/provider-azuread.user.UserConfig.property.surname"></a>

```python
surname: str
```

- *Type:* str

The user's surname (family name or last name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#surname User#surname}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.user.UserConfig.property.timeouts"></a>

```python
timeouts: UserTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#timeouts User#timeouts}

---

##### `usage_location`<sup>Optional</sup> <a name="usage_location" id="@cdktf/provider-azuread.user.UserConfig.property.usageLocation"></a>

```python
usage_location: str
```

- *Type:* str

The usage location of the user.

Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. The usage location is a two letter country code (ISO standard 3166). Examples include: `NO`, `JP`, and `GB`. Cannot be reset to null once set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#usage_location User#usage_location}

---

### UserTimeouts <a name="UserTimeouts" id="@cdktf/provider-azuread.user.UserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.user.UserTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import user

user.UserTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#create User#create}. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#delete User#delete}. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#read User#read}. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#update User#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.user.UserTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#create User#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.user.UserTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#delete User#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.user.UserTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#read User#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.user.UserTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/resources/user#update User#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### UserTimeoutsOutputReference <a name="UserTimeoutsOutputReference" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import user

user.UserTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>]

---



