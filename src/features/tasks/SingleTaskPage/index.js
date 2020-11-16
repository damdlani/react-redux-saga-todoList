import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Container from "../../../common/Container";
import Footer from "../../../common/Footer";
import { StyledSection } from "../../../common/Section/styled";
import {
  changeTaskDetail,
  changeTaskContent,
  selectTaskByID,
  toggleTaskDone,
} from "../TasksPage/tasksSlice";
import {
  EditButton,
  DoneButton,
  TaskContentForm,
  TaskSpan,
  TaskDetail,
  TaskHeader,
  DetailForm,
  TextArea,
  ContentInput,
} from "./styled";

export const SingleTaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => selectTaskByID(state, id));
  if(task === undefined){
    window.location = window.location.origin;
  };
  const { content, done, date, detail } = task;
  const [taskDetail, setTaskDetail] = useState(detail);
  const [taskContent, setTaskContent] = useState(content);
  const textarea = useRef(null);
  const input = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTaskDetail({ id, detailContent: taskDetail }));
    dispatch(changeTaskContent({ id, taskContent: taskContent }));
  }, [taskDetail, taskContent]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedTask = taskContent.trim();
    document.activeElement.blur();
    if(!trimmedTask){
      setTaskContent("Zadanie bez nazwy")
    } else {
      setTaskContent(trimmedTask)
    }
    
  };

  const changeDetailContent = (event) => {
    setTaskDetail(event.target.value);
  };
  const changeTaskTitleContent = (event) => {
    setTaskContent(event.target.value);
  };
  return (
    <Container>
      <StyledSection>
        <TaskHeader>
          <TaskContentForm onSubmit={onFormSubmit}>
            <EditButton type="button" onClick={() => input.current.focus()}>
              <i class="fas fa-pencil-alt"></i>
            </EditButton>
            <ContentInput
              value={taskContent}
              type="text"
              ref={input}
              onChange={changeTaskTitleContent}
            />
          </TaskContentForm>

          <TaskSpan>Dodano: {date}</TaskSpan>
        </TaskHeader>
        <TaskDetail>
          <TaskSpan>Szczegóły zadania: </TaskSpan>
          <EditButton onClick={() => textarea.current.focus()}>
            <i class="fas fa-pencil-alt"></i>
          </EditButton>
          <DetailForm onSubmit={onFormSubmit}>
            <TextArea
              ref={textarea}
              rows={6}
              placeholder={"Nie dodano szczegółów."}
              value={taskDetail}
              onChange={changeDetailContent}
              type="text"
            />
          </DetailForm>

          <TaskSpan>
            Ukończone:{" "}
            <DoneButton onClick={() => dispatch(toggleTaskDone(id))}>
              {done ? "tak" : "nie"}
            </DoneButton>{" "}
          </TaskSpan>
        </TaskDetail>
      </StyledSection>
      <Footer content="&copy;Krzysztof Kwieciński 2020" />
    </Container>
  );
};
