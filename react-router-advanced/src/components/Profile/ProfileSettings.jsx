function ProfileSettings() {
  return (
    <div>
      <h3>Profile Settings</h3>
      <label>
        Email Notifications:
        <input type="checkbox" />
      </label>
      <br />
      <label>
        Dark Mode:
        <input type="checkbox" />
      </label>
      <br />
      <button>Save Settings</button>
    </div>
  );
}

export default ProfileSettings;