module EditContact

  def edit_contact
    within '.edit_contact_form' do
      fill_in 'Name', with: 'TestE'
      fill_in 'Surname', with: 'Test'
      fill_in 'Email', with: 'test@test.com'
      fill_in 'Phone number', with: '0778242662'
      click_on 'Edit'
    end
  end

end
