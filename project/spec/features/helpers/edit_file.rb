module EditContact

  def edit_contact
    click_on 'Add contact'
    fill_in 'Name', with: 'TestE'
    fill_in 'Surname', with: 'Test'
    fill_in 'Email', with: 'test@test.com'
    fill_in 'Phone number', with: '0778242662'
    click_on 'Submit'
  end

end
